import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHeroSlider } from "@/services/operations/designAPI";

const Hero = () => {
  const [heroSlider, setHeroSlider] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeroSlider = async () => {
      try {
        const res = await getHeroSlider();
        setHeroSlider(res);
      } catch (error) {
        console.error("Error fetching hero slider:", error);
      }
    };
    fetchHeroSlider();
  }, []);

  const handleSliderClick = (hero) => {
    // Assuming each hero object has category and subcategory properties
    navigate(
      `/products?category=${hero.category._id}&subcategory=${hero.subcategory._id}`
    );
  };

  return (
    <div className="relative m-auto mt-2">
      <Carousel className="w-full hidden lg:block">
        <CarouselContent>
          {heroSlider.map((hero, key) => (
            <CarouselItem
              key={key}
              onClick={() => handleSliderClick(hero)}
              className="h-[500px]"
            >
              <img
                src={hero.image}
                alt={`Slide ${key + 1}`}
                className="cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel className="w-full lg:hidden h-[500px] pr-3">
        <CarouselContent>
          {heroSlider.map((hero, key) => (
            <CarouselItem key={key} onClick={() => handleSliderClick(hero)}>
              <img
                src={hero.image}
                alt={`Slide ${key + 1}`}
                className="h-[500px] object-cover object-center cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
