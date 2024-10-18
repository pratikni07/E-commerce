import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import profileImg from "@/assets/profiles/1.png";

const Testimonials = () => {
  const profileName = "John Doe";
  // const profileImg = "profile-pic.jpg";
  const testimonialText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.";

  return (
    <div>
      <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center mt-[20px]  mb-[20px] lg:mb-[30px]  lg:mt-[100px]  cursor-pointer">
        <p>SIMILAR PRODUCTS</p>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="testimonial border-1 border-[#8E3E63]  p-4 rounded-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h3 className="text-lg font-semibold">{profileName}</h3>
              </div>
              <p className="italic text-[#666875]">{testimonialText}</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="testimonial border-1 border-[#8E3E63]  p-4 rounded-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h3 className="text-lg font-semibold">{profileName}</h3>
              </div>
              <p className="italic text-[#666875]">{testimonialText}</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="testimonial border-1 border-[#8E3E63] p-4 rounded-md mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h3 className="text-lg font-semibold">{profileName}</h3>
              </div>
              <p className="italic text-[#666875]">{testimonialText}</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block" />
        <CarouselNext className="hidden lg:block" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
