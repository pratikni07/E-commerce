const express = require("express");
const router = express.Router();
const { searchProduct } = require("../controllers/Search");

router.get("/searchproduct", searchProduct);

module.exports = router;
