import React, { useState, useEffect } from "react";
import { Image } from "lucide-react";
import { getAllCategories } from "@/services/operations/categoryAPI";
import { addHomeModal } from "@/services/operations/designAPI"; // New function for adding home modal
import { useDispatch } from "react-redux";
import { HashLoader } from "react-spinners";

const UIHomeModal = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [homeModalData, setHomeModalData] = useState({
    title: "",
    category: "",
    subcategory: "",
  });

  const { title, category, subcategory } = homeModalData;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        setCategories(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(
      (cat) => cat._id === selectedCategoryId
    );
    setHomeModalData((prevState) => ({
      ...prevState,
      category: selectedCategoryId,
      subcategory: "",
    }));
    setSubCategories(selectedCategory ? selectedCategory.subcategories : []);
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

  const changeHandler = (e) => {
    setHomeModalData({
      ...homeModalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await dispatch(addHomeModal(homeModalData, imagePreview)); // Use new function
      setLoading(false);
      // Reset form after successful submission
      setHomeModalData({
        title: "",
        category: "",
        subcategory: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-sm p-4">
      <p className="font-bold">Home Modal</p>
      <div>{/* display home modal */}</div>
      <div>
        {loading && <HashLoader color="#242F66" />}
        <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="border-b border-gray-300 pb-8">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-[25px] leading-6 text-gray-900"
                >
                  Modal Image
                </label>
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
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileInputChange}
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
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                required
                value={title}
                onChange={changeHandler}
                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-gray-900"
            >
              SubCategory
            </label>
            <div className="mt-2">
              <select
                id="subcategory"
                name="subcategory"
                value={subcategory}
                onChange={(e) =>
                  setHomeModalData({
                    ...homeModalData,
                    subcategory: e.target.value,
                  })
                }
                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a subcategory</option>
                {subCategories.map((subCat) => (
                  <option key={subCat._id} value={subCat._id}>
                    {subCat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-x-4">
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UIHomeModal;
