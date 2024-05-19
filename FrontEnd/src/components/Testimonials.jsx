import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const profileName = "John Doe";
  const profileImg = "profile-pic.jpg";
  const testimonialText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.";

  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="testimonial border border-[#242F66] p-4 rounded-md mb-4">
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
            <div className="testimonial border border-[#242F66] p-4 rounded-md mb-4">
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
            <div className="testimonial border border-[#242F66] p-4 rounded-md mb-4">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
