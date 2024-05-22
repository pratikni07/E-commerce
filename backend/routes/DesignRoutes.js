const express = require("express");
const router = express.Router();
const {addHomePageSlider, getHomePageSlider,deleteHomePageSlider} = require("../controllers/Seller")


router.post("/addhomeslider", addHomePageSlider);
router.get("/gethomeslider", getHomePageSlider);
module.exports = router;
