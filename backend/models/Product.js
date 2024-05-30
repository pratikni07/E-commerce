const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortdescription: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  newPrice: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true,
  },
  sizes: [
    {
      size: {
        type: String,
      },
      stock: {
        type: Number,
      },
    },
  ],
  stock: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);