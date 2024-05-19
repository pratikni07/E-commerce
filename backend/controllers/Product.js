const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const {
      name,
      shortdiscription,
      newPrice,
      oldPrice,
      discount,
      images,
      description,
      category,
      subcategory,
      sizes,
      stock,
      isAvailable,
    } = productData;
    // validate the request
    if (
      !name ||
      !shortdiscription ||
      !newPrice ||
      !oldPrice ||
      !discount ||
      !images ||
      !category ||
      !subcategory ||
      !sizes ||
      !stock ||
      !isAvailable
    ) {
      return res.status(400).json({
        success: false,

        message: "all field required",
      });
    }
    // create unique product id
    const productId = Math.random().toString(36).substr(2, 9);
    // create a new product
    const product = await new Product({
      name,
      shortdiscription,
      productId,
      newPrice,
      oldPrice,
      discount,
      images,
      description,
      category,
      subcategory,
      sizes,
      stock,
      isAvailable,
    });
    // save the product
    // await product.save();
    // send reponse
    return res.status(200).json({
      success: true,
      data: product,
      message: "Product added successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error in product add",
    });
  }
};

//  fetch products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
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
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
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
    return res.status(400).json({
      success: false,
      message: "error in product fetch",
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

// fetch product by category and subcategory
exports.getProductByCategoryAndSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const products = await Product.find({ category, subcategory });
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
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
exports.filterProduct = async (req, res) => {
  try {
    const { category, subcategory, price, size, color } = req.body;
    const products = await Product.find({
      category,
      subcategory,
      price,
      size,
      color,
    });
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
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

// search product
exports.searchProduct = async (req, res) => {
  try {
    const { search } = req.body;
    const products = await Product.find({ name: { $regex: search } });
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
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

const getSortedProducts = (products, sortBy) => {
  if (sortBy === "price-desc") {
    return products.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "price-asc") {
    return products.sort((a, b) => a.price - b.price);
  }
  return products;
};
