const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Subcategory", subcategorySchema);
