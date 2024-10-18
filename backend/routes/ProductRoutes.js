const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductByCategoryandSubcategory,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductBySubcategory,
  getProductByCategory,
  filterProduct,
} = require("../controllers/Product");

// Add a new product
router.post("/addProduct", addProduct);

// Get all products
router.get("/getProduct", getProducts);

// Get products by category and subcategory
router.get(
  "/getProductByCategoryandSubcategory",
  getProductByCategoryandSubcategory
);

// Get a single product by ID
router.get("/getProductById/:id", getProductById);

// Update a product
router.put("/updateProduct/:id", updateProduct);

// Delete a product
router.delete("/deleteProduct/:id", deleteProduct);

// Get products by subcategory
router.get("/getProductBySubcategory/:id", getProductBySubcategory);

// Get products by category
router.get("/getProductByCategory/:id", getProductByCategory);

// Filter products
router.post("/filterProduct", filterProduct);

module.exports = router;
