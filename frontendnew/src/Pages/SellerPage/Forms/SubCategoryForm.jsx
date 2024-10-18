import React, { useState } from "react";
import { Image } from "lucide-react";
import { addSubCategory } from "@/services/operations/categoryAPI";

const SubCategoryForm = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState({
    category: "",
    subcategory: "",
    description: "",
  });
  const { category, subcategory, description } = subCategoryData;
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setSubCategoryData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!category || !subcategory || !description || !imagePreview) {
        throw new Error("Please fill all fields and upload an image");
      }

      const response = await addSubCategory(subCategoryData, imagePreview);

      setSubCategoryData({
        category: "",
        subcategory: "",
        description: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error in submission:", error);
      setError(
        error.message || "An error occurred while adding the subcategory"
      );
    }
    setLoading(false);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="mt-3" onSubmit={submitHandler}>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <label htmlFor="subcategory-category">Select Category</label>
      <select
        id="subcategory-category"
        name="category"
        className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={changeHandler}
        value={category}
        required
      >
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      <div className="pb-8">
        <div className="col-span-full">
          <div className="mt-4 flex justify-center items-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
            <div className="text-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mx-auto h-48 w-auto"
                />
              ) : (
                <Image className="mx-auto h-12 w-12 text-gray-300" />
              )}
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="subcategory-file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="subcategory-file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileInputChange}
                    required
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="subcategory-name">Enter Sub Category</label>
      <input
        type="text"
        id="subcategory-name"
        name="subcategory"
        className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter sub category"
        onChange={changeHandler}
        value={subcategory}
        required
      />

      <label htmlFor="subcategory-description">
        Category Short description
      </label>
      <textarea
        id="subcategory-description"
        name="description"
        className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Category Short description"
        onChange={changeHandler}
        value={description}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-[#242F66] hover:bg-[#242F66] mt-4 text-white py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default SubCategoryForm;
