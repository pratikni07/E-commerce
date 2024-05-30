const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      default: [],
    },
  ],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
