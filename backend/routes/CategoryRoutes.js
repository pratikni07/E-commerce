const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategories,
  getAllSubCategories,
  getSubCategoriesByCategoryId,
  addSubCategory,
} = require("../controllers/Category");

router.post("/addcategory", addCategory);
router.post("/addsubcategory", addSubCategory);
router.get("/getallcategories", getAllCategories);
router.get("/getallsubcategories", getAllSubCategories);
router.get(
  "/getSubcategoriesByCategoryId/:categoryId",
  getSubCategoriesByCategoryId
);

module.exports = router;
