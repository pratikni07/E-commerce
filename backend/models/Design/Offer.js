
const offerSchema = mongoose.Schema({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subcategory'
    },
    discount: {
      type: Number
    }
  })
  
  module.exports = mongoose.model("Offer", offerSchema);