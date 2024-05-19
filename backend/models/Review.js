const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
  },
});

// Static method to get average rating of product
reviewSchema.statics.getAverageRating = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);
  try {
    await this.model("Product").findByIdAndUpdate(productId, {
      averageRating: stats[0].averageRating,
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports = mongoose.model("Review", reviewSchema);
