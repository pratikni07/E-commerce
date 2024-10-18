const Wishlist = require("../models/Wishlist");

exports.addProductToWishlist = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    let wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, products: [] });
    }

    const isProductPresent = wishlist.products.some((product) =>
      product.product.equals(productId)
    );

    if (isProductPresent) {
      return res
        .status(200)
        .json({ message: "Product is already present in wishlist" });
    }

    // Add the new product to wishlist
    wishlist.products.push({ product: productId });

    await wishlist.save(); // Save the updated wishlist

    res.status(200).json({ message: "Product added to wishlist" });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// check item is present in wishlist or not
exports.checkProductInWishlist = async (req, res) => {
  try {
    // console.log(req.body)
    const { productId, userId } = req.body;
    let wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      return res.status(200).json({ message: "Wishlist not found" });
    }
    const isProductPresent = wishlist.products.some((product) =>
      product.product.equals(productId)
    );
    if (isProductPresent) {
      return res
        .status(200)
        .json({ message: "Product is already present in wishlist" });
    }
    return res.status(200).json({ message: "Product not found in wishlist" });
  } catch (error) {
    console.error("Error checking product in wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//  get all wishlist products

exports.getAllWishlistProducts = async (req, res) => {
  try {
    const { userId } = req.body; // Destructure userId from req.body

    // Find the wishlist based on userId and populate the products field with product details
    const wishlist = await Wishlist.findOne({ user: userId }).populate({
      path: "products",
      populate: { path: "product", model: "Product" },
    });

    // console.log(wishlist)
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json({ wishlist });
  } catch (error) {
    console.error("Error fetching wishlist products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
