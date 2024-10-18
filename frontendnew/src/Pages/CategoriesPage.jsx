import React, { useState, useRef, useEffect } from "react";
import { getAllSubCategoriesByCategoryId } from "@/services/operations/categoryAPI";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);
  const categoryId = "664a4b202b113ef1eb4084d3";

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

  return (
    <div ref={scrollRef} className="p-2 px-4">
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {categories.map((subcategory) => (
          <Link
            to={`/products/${subcategory._id}`}
            key={subcategory._id}
            className="block"
          >
            <div className="overflow-hidden flex flex-col items-center">
              <div className="w-[150px] h-[200px]">
                <img
                  src={subcategory.image || "/api/placeholder/150/200"}
                  alt={subcategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-2 text-sm md:text-base text-[#8E3E63] font-semibold">
                {subcategory.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
