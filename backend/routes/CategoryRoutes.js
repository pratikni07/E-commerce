const express = require("express");
const router = express.Router();
const { addCategory , getAllCategories, getAllSubCategories} = require("../controllers/Category")

router.post("/addcategory", addCategory);
router.get("/getallcategories", getAllCategories);
router.get("/getallsubcategories",getAllSubCategories)
module.exports = router;
