const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const Subcategory = require("../models/SubCategory");
const Category = require("../models/category");
const { v4: uuidv4 } = require("uuid"); // For generating unique IDs

exports.addProduct = async (req, res) => {
  try {
    const productData = req.body.productData;
    const {
      name,
      shortdescription,
      newPrice,
      oldPrice,
      discount,
      description,
      category,
      subcategory,
      stock,
    } = productData;

    // Validate required fields
    if (
      !name ||
      !shortdescription ||
      !newPrice ||
      !oldPrice ||
      !discount ||
      !category ||
      !subcategory ||
      !stock
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: name, shortdescription, newPrice, oldPrice, discount, category, subcategory, stock",
      });
    }

    // Create unique product ID
    const productId = uuidv4();

    // Create a new product instance
    const product = new Product({
      name,
      shortdescription,
      productId,
      newPrice,
      oldPrice,
      discount,
      description,
      category,
      subcategory,
      stock,
      isAvailable: true,
    });

    // Save the product
    await product.save();

    // Add product reference to the category
    const categoryProduct = await Category.findById(category);
    if (!categoryProduct) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // console.log("Category found:", categoryProduct);
    if (!categoryProduct.products) {
      // console.log("Initializing products array in category");
      categoryProduct.products = [];
    }
    categoryProduct.products.push(product._id);
    await categoryProduct.save();

    // Add product reference to the subcategory
    const subcategoryProduct = await Subcategory.findById(subcategory);
    if (!subcategoryProduct) {
      return res.status(404).json({
        success: false,
        message: "Subcategory not found",
      });
    }

    // console.log("Subcategory found:", subcategoryProduct);
    if (!subcategoryProduct.products) {
      // console.log("Initializing products array in subcategory");
      subcategoryProduct.products = [];
    }

    subcategoryProduct.products.push(product._id);
    await subcategoryProduct.save();

    return res.status(200).json({
      success: true,
      data: product,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Error in product add",
    });
  }
};

//  fetch products getProductByCategoryandSubcategory
exports.getProductByCategoryandSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    // console.log(category,subcategory)
    const products = await Product.find({ category, subcategory })
      .populate("category")
      .populate("subcategory");

    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error in product fetch",
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("subcategory");

    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error in product fetch",
    });
  }
};

// get single product using id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate("category")
      .populate("subcategory");
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(400).json({
      success: false,
      message: "Error in product fetch",
    });
  }
};

// update product using id
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const product = await Product.findByIdAndUpdate(id, productData, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(201).json({
      success: true,
      data: product,
      message: "Product updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "error in product update",
    });
  }
};

// delete product using id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "error in product delete",
    });
  }
};

// fetch product by subcategory
exports.getProductBySubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ subcategory: id });
    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error in product fetch",
    });
  }
};

// fetch product by category
exports.getProductByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ category: id });
    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error in product fetch",
    });
  }
};

// const uploader = multer({
//   storage: fileStorage.storage,
// });

// display product using filter

// Get products by filter : price, fabric, color,size

exports.filterProduct = async (req, res) => {
  try {
    const { category, subcategory, price, fabric, color, size } = req.body;
    minPrice = 100;
    maxPrice = 1000;
    // Build the query object dynamically based on the presence of each parameter
    const query = {};
    if (category && category.length > 0) {
      query.category = { $in: category };
    }
    if (subcategory && subcategory.length > 0) {
      query.subcategory = { $in: subcategory };
    }
    if (minPrice !== undefined && maxPrice !== undefined) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice !== undefined) {
      query.price = { $gte: minPrice };
    } else if (maxPrice !== undefined) {
      query.price = { $lte: maxPrice };
    }
    if (fabric && fabric.length > 0) {
      query.fabric = { $in: fabric };
    }
    if (color && color.length > 0) {
      query.color = { $in: color };
    }
    if (size && size.length > 0) {
      query.size = { $in: size };
    }

    const products = await Product.find(query);

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Products not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.error("Error in product fetch:", error);
    return res.status(400).json({
      success: false,
      message: "Error in product fetch",
    });
  }
};

// search product

const getSortedProducts = (products, sortBy) => {
  if (sortBy === "price-desc") {
    return products.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "price-asc") {
    return products.sort((a, b) => a.price - b.price);
  }
  return products;
};
