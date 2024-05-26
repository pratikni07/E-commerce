import React from 'react';
import CategoryCard from '@/components/Cards/CategoryCard';
import Hero from '@/components/Home/Hero';
import Navbar1 from '@/components/Navbar/Navbar';
import Slider from './Slider';

const HomePage = () => {
  return (
    <div className="w-[90%] m-auto">
      <Hero />
      <div className="mt-8">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer">
          <p>BEST SELLER</p>
        </div>
        <Slider/>
      </div>
    </div>
  );
};

export default HomePage;
