const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary")
const Subcategory = require("../models/SubCategory")
const Category = require("../models/category")
exports.addProduct = async (req, res) => {

    try {
      // console.log(req.body)
        const productData = req.body;
        console.log(productData)
        console.log("1")
        const {
            name,
            shortdescription,
            newPrice,
            oldPrice,
            discount,
            images,
            description,
            category,
            subcategory,
            stock,
            // sizes,
            // isAvailable,
        } = productData;
        // validate the request
        // if (!name || !shortdescription || !newPrice || !oldPrice || !discount || !images || !description || !category || !subcategory || !stock) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "all field required",
        //     });
        // }
        console.log("3")
        // create unique product id
        const productId = Math.random().toString(36).substr(2, 9);
        // create a new product
        console.log("4")
        const imagesURL = await Promise.all(images.map(async (img, i) => {
            const cloudinary_res = await cloudinary.uploader.upload(img, {
                folder: "/ecommerce/products",
                public_id: `${name}-${i + 1}`
            });
            return cloudinary_res.secure_url;
        }));
        console.log("5")

        const product = await new Product({
            name,
            shortdescription,
            productId,
            newPrice,
            oldPrice,
            discount,
            images: imagesURL,
            description,
            category,
            subcategory,
            stock,
            isAvailable: true,
        });
        // save the product
        await product.save();
        console.log("6")
        // findby id category and add push prodcut in it 
        const categoryProduct = await Category.findById(category);
        categoryProduct.products.push(product._id);
        await categoryProduct.save();
        console.log("7")
        // findby id subcategory and add push prodcut in it
        const subcategoryProduct = await Subcategory.findByIdAndUpdate(subcategory, {
          $push: { products: product._id },
        });
        await subcategoryProduct.save();
        console.log("8")

        return res.status(200).json({
            success: true,
            data: product,
            message: "Product added successfully",
        });
    } catch (error) {
        // Set loading state to false in case of error
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
