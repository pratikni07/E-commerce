import React from "react";

const ProductCard = ({ linkTo, imgURL }) => {
  return (
    <div className="w-[300px]">
      <img src={imgURL} alt="" />
      <p className="font-bold mt-3 mb-3">Product Name</p>
      <p className="font-bold mt-3 mb-3">Price</p>
      <button className="bg-[#242F66] text-white w-full p-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
