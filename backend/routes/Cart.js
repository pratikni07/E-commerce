const express = require("express");
const router = express.Router();
const { addToCart, getCart, removeProduct } = require("../controllers/Cart");

router.post("/addtocart", addToCart);
router.get("/getcart", getCart); 
router.delete("/removefromcart", removeProduct); 
module.exports = router;
