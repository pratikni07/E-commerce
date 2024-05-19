const Category = require("../models/category");
const Subcategory = require("../models/SubCategory");

// Create a new category
exports.addCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const { name, image, description } = categoryData;

    if (!name || !image || !description) {
      return res.status(400).json({
        success: false,
        message: "all field required",
      });
    }
    const category = await new Category({
      name,
      image,
      description,
    });

    await category.save();
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
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

// create sbucategory by category id
exports.addSubCategory = async (req, res) => {
  try {
    const { name, image, description, category } = req.body;
    // validate the request
    if (!name || !image || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "all field required",
      });
    }
    // check subcategory present in catgoery
    const isSubCategoryExist = await Subcategory.findOne({ name });
    if (isSubCategoryExist) {
      return res.status(409).json({
        success: false,
        message: "subcategory already exist",
      });
    }
    // create a new subcategory
    const subcategory = await new Subcategory({
      name,
      image,
      description,
      category,
    });
    await subcategory.save();
    res.status(201).json({
      success: true,
      message: "Subcategory created successfully",
      subcategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// get all subcategory by category id
exports.getSubCategories = async (req, res) => {
  try {
    const { category } = req.params;
    const subcategories = await Subcategory.find({ category });
    if (!subcategories) {
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
