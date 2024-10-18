// user routes
const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  sendotp,
  getAllUserAddresses,
  getAllUsers,
  getUserDetails,
} = require("../controllers/User");

const { addAddress } = require("../controllers/User");
router.post("/sendotp", sendotp);
router.post("/register", registerUser); // Registers a new user to the database
router.post("/login", login); // Logs in a user using email and password
router.post("/addAddress", addAddress);
router.post("/getAllAddress", getAllUserAddresses);

//  get all users
router.get("/getAllUsers", getAllUsers);
router.get("/users/:id", getUserDetails);

module.exports = router;
