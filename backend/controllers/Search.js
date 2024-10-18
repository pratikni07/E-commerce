const Category = require("../models/category");
const Subcategory = require("../models/SubCategory");
const Product = require("../models/Product");

async function getRelatedSearches(query) {
  const words = query.split(" ");
  const relatedQueries = words.map((word) => new RegExp(word, "i"));

  const relatedProducts = await Product.find({ name: { $in: relatedQueries } })
    .limit(5)
    .select("name");

  return relatedProducts.map((product) => product.name);
}

async function getSuggestions(query) {
  const regex = new RegExp(`^${query}`, "i");

  const productSuggestions = await Product.find({ name: regex })
    .limit(3)
    .select("name");

  const categorySuggestions = await Category.find({ name: regex })
    .limit(2)
    .select("name");

  return [
    ...productSuggestions.map((p) => p.name),
    ...categorySuggestions.map((c) => c.name),
  ];
}

exports.searchProduct = async (req, res) => {
  try {
    const { query } = req.query;
    const regex = new RegExp(query, "i");

    const categories = await Category.find({ name: regex });
    const subcategories = await Subcategory.find({ name: regex });
    const products = await Product.find({
      $or: [
        { name: regex },
        { shortdescription: regex },
        { description: regex },
        { color: regex },
        { fabric: regex },
      ],
    }).populate("category subcategory");

    const relatedSearches = await getRelatedSearches(query);
    const suggestions = await getSuggestions(query);

    const results = {
      categories,
      subcategories,
      products,
      relatedSearches,
      suggestions,
    };

    res.json(results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error performing search", error: error.message });
  }
};
