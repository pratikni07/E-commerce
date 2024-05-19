import React from "react";
import CategoryCard from "../Cards/CategoryCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MensCategory = () => {
  return (
    <div className="flex">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/files/Shorts_2.png?v=1696586115&width=200"
              }
              title={"T - Shirts"}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/files/O._Tees_1.png?v=1696574893&width=200"
              }
              title={"Oversized Tees"}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/files/Joggers_1_d89bfdeb-6295-49a8-9160-7853ed6b1088.png?v=1696575058&width=200"
              }
              title={"Joggers"}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/collections/9.jpg?v=1679917418&width=200"
              }
              title={"Co-Ord Sets"}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/files/Hoodies_965a4923-cf9f-488e-94fe-160a58722121.jpg?v=1696574786&width=200"
              }
              title={"Hoodies"}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <CategoryCard
              linkto={"/"}
              imgURL={
                "https://nobero.com/cdn/shop/collections/8.jpg?v=1679917719&width=200"
              }
              title={"Shorts"}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MensCategory;
