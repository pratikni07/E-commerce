const express = require("express");
const router = express.Router();

const { addProductToWishlist, checkProductInWishlist, getAllWishlistProducts } = require("../controllers/Wishlist");

router.post("/addToWishlist", addProductToWishlist);
router.get("/checkToWishlist", checkProductInWishlist);
router.post("/getAllWishlist", getAllWishlistProducts);

module.exports = router;
