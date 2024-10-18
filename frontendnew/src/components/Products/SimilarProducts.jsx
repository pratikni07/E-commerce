import React, { useState, useEffect } from "react";
import ProductCard from "../Cards/ProductCard";
import { getProductsByCategoryAndSubCategory } from "@/services/operations/productAPI";

const SimilarProducts = ({ category, subcategory, productId }) => {
  const [products, setProducts] = useState([]);
  const cat = category._id;
  const subcat = subcategory._id;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsByCategoryAndSubCategory(cat, subcat);
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category, subcategory]);

  return (
    <div>
      <div className="mt-8 ">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex  cursor-pointer">
          <p>SIMILAR PRODUCTS</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mt-4 py-4 rounded-md ">
          {products.map(
            (product, index) =>
              // check productid is not equal
              product._id !== productId && (
                <ProductCard
                  key={index}
                  imgURL={product.images[0]}
                  title={product.name}
                  oprice={product.oldPrice}
                  nprice={product.newPrice}
                  id={product._id}
                />
              )
          )}
        </div>
        <div className="textColor  flex justify-center cursor-pointer">
          <p className="backgroundColor text-[12px] lg:text-[15px] text-white p-3 rounded-md mt-7 px-5 font-bold mb-5">
            View More Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
