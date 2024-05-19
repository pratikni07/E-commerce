// ProductPage.js

import React from "react";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  // Sample product data (replace with actual data fetched from API or state)
  const product = {
    name: "Product Name",
    price: 49.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    description: "Product description goes here...",
    images: [
      { url: "image_url_1.jpg" },
      { url: "image_url_2.jpg" },
      { url: "image_url_3.jpg" },
    ],
    similarProducts: [
      { name: "Similar Product 1", price: 39.99, image: "similar_image_1.jpg" },
      { name: "Similar Product 2", price: 54.99, image: "similar_image_2.jpg" },
      { name: "Similar Product 3", price: 44.99, image: "similar_image_3.jpg" },
    ],
  };

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
