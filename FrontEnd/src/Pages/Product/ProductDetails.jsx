// ProductDetails.js

import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="p-4">
      {/* Product Images */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Display product images */}
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Product ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Product Title, Price, Size, Add to Cart, Wishlist */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 text-lg">${product.price}</p>
          <p className="text-gray-600">
            Available Sizes: {product.sizes.join(", ")}
          </p>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
            Add to Cart
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Add to Wishlist
          </button>
        </div>
      </div>

      {/* Product Description */}
      <p className="text-gray-800 mb-4">{product.description}</p>

      {/* Product Colors */}
      <div className="mb-4">
        <p className="text-gray-600">Available Colors:</p>
        <div className="flex">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full mr-2"
              style={{ backgroundColor: color, border: "2px solid white" }}
            ></div>
          ))}
        </div>
      </div>

      {/* Similar Products Section */}
      <h2 className="text-xl font-semibold mb-2">Similar Products</h2>
      {/* Display similar products */}
      <div className="grid grid-cols-3 gap-4">
        {product.similarProducts.map((similarProduct, index) => (
          <div key={index} className="border rounded-lg p-4">
            <img
              src={similarProduct.image}
              alt={similarProduct.name}
              className="w-full h-auto mb-2"
            />
            <p className="text-gray-800 font-semibold">{similarProduct.name}</p>
            <p className="text-gray-600">${similarProduct.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
