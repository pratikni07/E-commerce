// user routes
const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  sendotp
} = require("../controllers/User");
router.post("/sendotp",sendotp)
router.post("/register", registerUser); // Registers a new user to the database
router.post("/login", login); // Logs in a user using email and password

module.exports = router