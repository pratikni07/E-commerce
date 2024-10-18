import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/services/operations/productAPI";
import ProductCard from "../Cards/ProductCard";
import LoadingProducts from "./LoadingProducts";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await getAllProducts();
      setProduct(res);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="mt-8 ">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer">
          <p>ALL PRODUCTS</p>
        </div>
        {/* for small screen display 6 products for bigger screen display 8 products and for tab show 6 */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 rounded-md">
          {loading ? (
            <LoadingProducts />
          ) : (
            product.map((prod, i) => (
              <ProductCard
                key={i}
                imgURL={prod.images[0]}
                title={prod.name}
                oprice={prod.oldPrice}
                nprice={prod.newPrice}
                id={prod._id}
              />
            ))
          )}
        </div>

        <div className="textColor flex justify-center cursor-pointer">
          <p className="backgroundColor text-[12px] lg:text-[15px] text-white p-3 rounded-md mt-7 px-5 font-bold mb-5">
            View More Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
