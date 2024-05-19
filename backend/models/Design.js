const mongoose = require("mongoose");
const designSchema = new mongoose.Schema({
  heroSlider: [
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
      subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
      discount: {
        type: Number,
      },
    },
  ],
  offers: [
    {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
      subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
      discount: {
        type: Number,
      },
    },
  ],
  headerOffer: {
    type: String,
  },
});
