const express = require("express");
const router = express.Router();
const { addSale, getAllSales } = require("../controllers/Offer");

router.post("/addSale", addSale);
router.get("/getAllSales", getAllSales);

module.exports = router;
