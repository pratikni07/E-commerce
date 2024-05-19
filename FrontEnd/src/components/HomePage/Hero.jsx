import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="https://nobero.com/cdn/shop/files/Homepage_Banner_6.webp?v=1709616576"
              alt="Slide 1"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://nobero.com/cdn/shop/files/Homepage_Banner_36.webp?v=1709616578"
              alt="Slide 2"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://nobero.com/cdn/shop/files/84_2.webp?v=1709536148"
              alt="Slide 3"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://nobero.com/cdn/shop/files/85.webp?v=1709536148"
              alt="Slide 4"
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
