import React, { useState, useEffect, useRef } from "react";
import { getAllSubCategoriesByCategoryId } from "@/services/operations/categoryAPI";
import { Link } from "react-router-dom";

const CategoryView = ({ title, categoryId }) => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllSubCategoriesByCategoryId({ categoryId });
        setCategories(response.subcategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };
    fetchCategories();
  }, [categoryId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        // Check if we've reached the end of the scrollable area
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Reset to the start
        } else {
          scrollRef.current.scrollBy({ left: 100, behavior: "smooth" }); // Scrolls by 100px
        }
      }
    }, 2300);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="p-4">
      <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer mb-4">
        <p>SHOP FOR {title}</p>
      </div>
      <div className="overflow-x-auto flex space-x-4 pb-4" ref={scrollRef}>
        {categories.map((subcategory) => (
          <Link to={`/products/${subcategory._id}`}>
            <div key={subcategory.id} className="flex-none">
              <div className="w-[150px] h-[200px] max-sm:w-[100px] max-sm:h-[150px] overflow-hidden">
                <img
                  src={subcategory.image || "/api/placeholder/160/160"}
                  alt={subcategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
