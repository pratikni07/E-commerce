const mongoose = require("mongoose");
const homeModalSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  //   sale: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Sale",
  //   },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
  },
});

module.exports = mongoose.model("HomeModal", homeModalSchema);
