import React ,{useState, useEffect}from "react";
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
  return (
    <div className="relative m-auto mt-2">
      <Carousel className="w-full ">
        <CarouselContent> 
          {
            heroSlider.map((hero, key) => (
              <CarouselItem key={key}>
                <img
                  src={hero.image}
                  alt="Slide 1"
                  className="cursor-pointer"
                />
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
