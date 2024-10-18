const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: [
        "mega",
        "festival",
        "season",
        "limited",
        "Black Friday",
        "Buy - Get - ",
      ],
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    buy: {
      type: String,
      min: 0,
    },
    get: {
      type: String,
      min: 0,
    },

    isApplicableForAllProducts: {
      type: Boolean,
      default: false,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
    discount: {
      type: Number,
      // required: true,
      // min: 0,
    },
    discountType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);

const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;
