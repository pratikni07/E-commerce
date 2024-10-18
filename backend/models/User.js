const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Customer",
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  wishlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wishlist",
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
