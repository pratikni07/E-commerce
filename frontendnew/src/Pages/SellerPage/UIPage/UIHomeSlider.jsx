import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import HomeSliderForm from "../Forms/HomeSliderForm";
import {
  getHeroSlider,
  // deleteHeroSlider,
} from "@/services/operations/designAPI";

const UIHomeSlider = () => {
  const [heroSlider, setHeroSlider] = useState([]);

  useEffect(() => {
    fetchHeroSlider();
  }, []);

  const fetchHeroSlider = async () => {
    try {
      const res = await getHeroSlider();
      setHeroSlider(res);
    } catch (error) {
      console.error("Error fetching hero slider:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // await deleteHeroSlider(id);
      // fetchHeroSlider(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting hero slider:", error);
    }
  };

  return (
    <div className="p-3 border-b border-slate-700 rounded-md bg-white">
      <div className="mb-9">
        <h1 className="font-bold text-2xl">Home Slider</h1>
      </div>
      <div>
        {heroSlider && heroSlider.length > 0 ? (
          heroSlider.map((hero, key) => (
            <div key={key} className="flex mb-4 justify-between">
              <img
                src={hero.image}
                alt="Slider Image"
                width={200}
                height={100}
              />
              <p>{hero.title}</p>
              <p>{hero.category?.name}</p>
              <p>{hero.subcategory?.name}</p>
              <p>Discount: {hero.discount}%</p>
              <div className="flex gap-2">
                <Button>Edit</Button>
                <Button
                  className="bg-red-400 hover:bg-red-500"
                  onClick={() => handleDelete(hero._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No sliders found.</p>
        )}
      </div>
      <div>
        <HomeSliderForm onSubmitSuccess={fetchHeroSlider} />
      </div>
    </div>
  );
};

export default UIHomeSlider;
