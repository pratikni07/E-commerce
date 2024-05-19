const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,

  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

// middleware to verify if the user is logged in or not
const auth = require("../middleware/auth");

router.get("/addProduct", auth, addProduct);
router.get("/getProduct", auth, getProducts); // fetch all products

router.post("/createProduct", auth, createProduct); // add new product

router.post("/getproductbyId", getProductById); // get product by id from url parameter

router.put("/updateproduct", auth, isSeller, updateProduct); // update product by id

router.delete("/deleteproduct", auth, isSeller, deleteProduct); // delete product by id

module.exports = router;
