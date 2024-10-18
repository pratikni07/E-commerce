import React from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProductCard = ({
  imgURL,
  title,
  oprice,
  nprice,
  id,
  saleType,
  buy,
  get,
}) => {
  const calculateDiscountPercentage = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const discountPercentage = calculateDiscountPercentage(oprice, nprice);

  return (
    <div className="w-[170px] md:w-[210px] lg:w-[220px] bg-white rounded-md overflow-hidden shadow-lg cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <Image isZoomed width={240} height={200} alt={title} src={imgURL} />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-[#8E3E63] text-white px-2 py-1 rounded-xl text-xs z-10 ">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        <div className="p-2 bg-white flex flex-col">
          <p className="text-sm font-medium text-gray-800 truncate">{title}</p>
          <div className="flex items-center mt-1">
            <h2 className="font-bold text-gray-900">₹{nprice}</h2>
            {oprice !== nprice && (
              <p className="line-through text-gray-500 ml-2 text-sm">
                ₹{oprice}
              </p>
            )}
          </div>
          {saleType === "Buy - Get - " && buy > 0 && get > 0 && (
            <div className="mt-1">
              <p className="text-red-500 text-sm font-medium">
                Buy {buy} Get {get} Free
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
