const Sale = require("../models/Sale/Sale");
const cloudinary = require("cloudinary").v2; // Ensure cloudinary is set up correctly

exports.addSale = async (req, res) => {
  try {
    console.log(req.body.formData);
    const {
      name,
      buy,
      get,
      category,
      subcategories,
      discount,
      discountType,
      startDate,
      endDate,
      isApplicableForAllProducts,
    } = req.body.formData;

    // Validate input
    if (
      !name ||
      // !discount ||
      !discountType ||
      !startDate ||
      !endDate ||
      (isApplicableForAllProducts === false && (!category || !subcategories))
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Upload main image to Cloudinary
    const mainImage = req.body.mainImagePreview;
    const cloudinaryMainImageRes = await cloudinary.uploader.upload(mainImage, {
      folder: "/ecommerce/sale",
      public_id: `${name}_main_${Date.now()}`,
    });
    const mainImageUrl = cloudinaryMainImageRes.secure_url;

    // Optional: Handle additional images
    // const additionalImages = req.files.additionalImages || [];
    // const imagesUrls = await Promise.all(
    //   additionalImages.map(async (image) => {
    //     const cloudinaryRes = await cloudinary.uploader.upload(image.path, {
    //       folder: "/ecommerce/sale",
    //       public_id: `${name}_additional_${Date.now()}_${image.originalname}`,
    //     });
    //     return cloudinaryRes.secure_url;
    //   })
    // );

    // Create sale instance
    const sale = new Sale({
      name,
      mainImage: mainImageUrl,
      // images: imagesUrls, // Uncomment if using additional images
      buy: name === "Buy - Get - " ? buy : "",
      get: name === "Buy - Get - " ? get : "",
      isApplicableForAllProducts,
      category: isApplicableForAllProducts ? [] : category,
      subcategories: isApplicableForAllProducts ? [] : subcategories,
      discount,
      discountType,
      startDate,
      endDate,
    });

    await sale.save();

    return res
      .status(201)
      .json({ message: "Sale created successfully.", sale });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

// Update Sale
exports.updateSale = async (req, res) => {
  try {
    const { saleId } = req.params;
    const {
      name,
      category,
      subcategory,
      discount,
      discountType,
      startDate,
      endDate,
    } = req.body;

    const updatedData = {
      ...(name && { name }),
      ...(category && { category }),
      ...(subcategory && { subcategory }),
      ...(discount && { discount }),
      ...(discountType && { discountType }),
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
    };

    const updatedSale = await Sale.findByIdAndUpdate(saleId, updatedData, {
      new: true,
    });

    if (!updatedSale) {
      return res.status(404).json({ message: "Sale not found." });
    }

    return res
      .status(200)
      .json({ message: "Sale updated successfully.", updatedSale });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

// Delete Sale
exports.deleteSale = async (req, res) => {
  try {
    const { saleId } = req.params;

    const deletedSale = await Sale.findByIdAndDelete(saleId);

    if (!deletedSale) {
      return res.status(404).json({ message: "Sale not found." });
    }

    return res.status(200).json({ message: "Sale deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

// Get Sale by ID
exports.getSaleById = async (req, res) => {
  try {
    const { saleId } = req.params;

    const sale = await Sale.findById(saleId)
      .populate("category")
      .populate("subcategory");

    if (!sale) {
      return res.status(404).json({ message: "Sale not found." });
    }

    return res.status(200).json(sale);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

// Get All Sales
exports.getAllSales = async (req, res) => {
  try {
    const currentDate = new Date();

    const sales = await Sale.find({
      startDate: { $lte: currentDate }, // Sale has started
      endDate: { $gte: currentDate }, // Sale is still ongoing
    })
      .populate("category")
      .populate("subcategories")
      .sort({ createdAt: -1 });

    return res.status(200).json(sales);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};
