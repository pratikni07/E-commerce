import Hero from "@/components/HomePage/Hero";
import HomeProducts from "@/components/HomePage/HomeProducts";
import MensCategory from "@/components/HomePage/MensCategory";
import Testimonials from "@/components/Testimonials";
import React, { useState } from "react";

const Home = () => {
  const [mensCategories , setMensCategories] = useState([])

  return (
    <div>
      <div className="w-[90%] m-auto ">
        <Hero />
        <div className="mt-10">
          <p className="text-center font-semibold text-[25px] mb-5">
            Shop For Men
          </p>
          <MensCategory />
        </div>
        <div className="mt-10">
          <p className="text-center font-semibold text-[25px] mb-5">
            Shop For Women
          </p>
          <MensCategory />
        </div>
      </div>
      {/* about Us Card  */}
      <div className="mt-10">
        <img
          src="https://nobero.com/cdn/shop/files/BRAND_STORY_2000_x_521_px_5.webp?v=1704521067"
          alt=""
          className="w-full  max-sm:hidden"
        />
        <img
          src="https://nobero.com/cdn/shop/files/Our_Story_2.webp?v=1704521067"
          alt=""
          className="w-full hidden max-sm:block max-md:hidden"
        />
      </div>
      <div className="w-[90%] m-auto mt-10 text-center">
        {/* Home Product */}
        <p className="text-center font-semibold text-[25px] ">See the latest</p>
        <p className="mb-7 text-[15px] text-[#666875]">Handpicked for you</p>
        <HomeProducts />
      </div>

      <div className="w-[90%] m-auto mt-10 text-center">
        {/* Home Product */}
        <p className="text-center font-semibold text-[25px] ">
          Our Bestsellers
        </p>
        <p className="mb-7 text-[15px] text-[#666875]">
          Don't miss out Top Selling styles
        </p>
        <HomeProducts />
      </div>

      <div className="mt-10">
        <img
          src="https://nobero.com/cdn/shop/files/TRAVEL_HOODIE_2000_x_521_px.jpg?v=1679922010"
          alt=""
          className="w-full  max-sm:hidden"
        />
        <img
          src="https://nobero.com/cdn/shop/files/Our_Story_2.webp?v=1704521067"
          alt=""
          className="w-full hidden max-sm:block max-md:hidden"
        />
      </div>

      <div className="w-[85%] m-auto mt-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
