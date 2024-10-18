const express = require("express");
const router = express.Router();
const {
  addHomePageSlider,
  getHomePageSlider,
  deleteHomePageSlider,
  addHomeModal,
  getHomeModal,
} = require("../controllers/Seller");

router.post("/addhomeslider", addHomePageSlider);
router.get("/gethomeslider", getHomePageSlider);
router.delete("/deletehomeslider/:id", deleteHomePageSlider);
router.post("/addhomemodal", addHomeModal);
router.get("/gethomemodal", getHomeModal);

module.exports = router;
