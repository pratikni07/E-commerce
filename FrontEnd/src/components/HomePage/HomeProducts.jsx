import React from "react";
import ProductCard from "../Cards/ProductCard";
import { Button } from "../ui/button";

const HomeProducts = () => {
  return (
    <div className="flex flex-wrap justify-between ">
      <ProductCard
        linkTo={"/"}
        imgURL={
          "https://nobero.com/cdn/shop/files/WhatsAppImage2024-03-20at10.57.51AM_e3b090e7-67d5-4d26-9437-e8ec03cc3b6b.jpg?v=1710912922"
        }
      />

      <ProductCard
        linkTo={"/"}
        imgURL={
          "https://nobero.com/cdn/shop/products/26cbg-1162.jpg?v=1691578795"
        }
      />

      <ProductCard
        linkTo={"/"}
        imgURL={
          "https://nobero.com/cdn/shop/files/EBMShortsZoom_0000_Men-EB-Shorts-8.jpg?v=1698818556"
        }
      />
      <ProductCard
        linkTo={"/"}
        imgURL={
          "https://nobero.com/cdn/shop/files/WhatsAppImage2024-02-21at5.58.45PM_1.jpg?v=1709039454"
        }
      />
      <div className="m-auto">
        <Button className="items-center mt-10 bg-transparent text-[#242F66] font-bold border-2 px-10 hover:bg-[#242F66] hover:text-white">
          Shop All Products
        </Button>
      </div>
    </div>
  );
};

export default HomeProducts;
