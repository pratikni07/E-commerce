const Category = require("../models/category");
const Subcategory = require("../models/SubCategory");
const cloudinary = require("../config/cloudinary");
// Create a new category
exports.addCategory = async (req, res) => {
  try {
    const categoryData = req.body.categoryData;
    const image = req.body.image;
    // console.log(image)

    const { category, description } = categoryData;

    // Check if all required fields are present
    if (!category || !image || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // Check if category already exists
    const isExist = await Category.findOne({ name: category });
    if (isExist) {
      return res.status(500).json({
        success: false,
        message: "Category already exists",
      });
    }

    // Upload image to Cloudinary
    const cloudinary_res = await cloudinary.uploader.upload(image, {
      folder: "/ecommerce/category",
      public_id: category,
    });

    const imageUrl = cloudinary_res.secure_url;
    const categoryToAdd = await Category.create({
      name: category,
      image: imageUrl, // Use the Cloudinary URL here
      description,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category: categoryToAdd, // You can include the added category data in the response if needed
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories");
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET All sub category
exports.getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.status(200).json({
      success: true,
      subcategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// create sbucategory by category id
exports.addSubCategory = async (req, res) => {
  try {
    const { image, subCategoryData } = req.body;
    const { description, category } = subCategoryData;
    const name = subCategoryData.subcategory;

    // Validate the request
    if (!name || !image || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the subcategory already exists
    const isSubCategoryExist = await Subcategory.findOne({ name });
    if (isSubCategoryExist) {
      return res.status(409).json({
        success: false,
        message: "Subcategory already exists",
      });
    }

    // Upload image to Cloudinary
    const cloudinaryRes = await cloudinary.uploader.upload(image, {
      folder: "/ecommerce/subcategory",
      public_id: category,
    });

    const imageUrl = cloudinaryRes.secure_url;
    const subcategory = new Subcategory({
      name,
      image: imageUrl,
      description,
      category,
    });

    // Save the new subcategory
    await subcategory.save();

    // Find the category and add the subcategory ID
    const categoryData = await Category.findById(category);
    if (!categoryData) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Push the subcategory ID to the category's subcategories array
    categoryData.subcategories.push(subcategory._id);
    await categoryData.save();

    res.status(201).json({
      success: true,
      message: "Subcategory created successfully",
      subcategory,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// get all subcategory by category id
exports.getSubCategoriesByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await Category.findById(categoryId).populate(
      "subcategories"
    );
    if (!subcategories || subcategories.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No subcategory found",
      });
    }
    res.status(200).json({
      success: true,
      subcategories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// update a subcategory by id
exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await Subcategory.findByIdAndUpdate(id, req.body);
    if (!subcategory) {
      return res.status(404).json({
        success: false,
        message: "Subcategory not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Subcategory updated successfully",
      subcategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// delete a subcategory by id
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await Subcategory.findByIdAndDelete(id);
    if (!subcategory) {
      return res.status(404).json({
        success: false,
        message: "Subcategory not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Subcategory deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
