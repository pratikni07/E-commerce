import React from "react";

const CategoryCard = ({ linkto, imgURL, title }) => {
  return (
    <div className="text-center">
      <img src={imgURL} alt="" className="" />
      <p className="font-bold mt-3 mb-3">{title}</p>
    </div>
  );
};

export default CategoryCard;
