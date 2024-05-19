const express = require("express");
const router = express.Router();
const { addCategory , getAllCategories} = require("../controllers/Category")

router.post("/addcategory", addCategory);
router.get("/getallcategories", getAllCategories);
module.exports = router;
