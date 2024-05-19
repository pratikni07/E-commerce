const express = require("express");
const router = express.Router();
const { addToCart, getCart, removeProduct } = require("../controllers/Cart");

router.post("/addtocart", addToCart);
router.get("/getcart", getCart); // Gets the cart for the user making the request
router.delete("/removefromcart", removeProduct); // Removes a product from the cart by its id
module.exports = router;
