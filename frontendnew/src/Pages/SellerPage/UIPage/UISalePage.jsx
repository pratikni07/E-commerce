import React, { useState, useEffect } from "react";
import {
  User,
  LogOut,
  LayoutDashboard,
  Home,
  Shirt,
  Component,
  SquarePlus,
  PanelsTopLeft,
  Settings2,
  Users,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getAllCategories } from "@/services/operations/categoryAPI";
import { addSale } from "@/services/operations/designAPI";

const UISalePage = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
  const [offerData, setOfferData] = useState({
    name: "",
    buy: "",
    get: "",
    category: "",
    subcategories: [],
    discount: 0,
    discountType: "percentage",
    startDate: "",
    endDate: "",
    isApplicableForAllProducts: false,
    mainImage: null,
    additionalImages: [],
  });

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
    setSelectedCategory(selectedCategoryId);
    const selectedCategory = categories.find(
      (cat) => cat._id === selectedCategoryId
    );
    setSubCategories(selectedCategory ? selectedCategory.subcategories : []);
    setOfferData((prev) => ({
      ...prev,
      category: selectedCategoryId,
      subcategories: [],
    }));
    setSelectedSubcategories([]);
  };

  const handleSubcategoryChange = (e) => {
    const selectedSubcategoryIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSubcategories(selectedSubcategoryIds);
    setOfferData((prev) => ({
      ...prev,
      subcategories: selectedSubcategoryIds,
    }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setOfferData((prev) => ({ ...prev, mainImage: file }));
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        setAdditionalImagePreviews([...previews]);
      };
      reader.readAsDataURL(file);
    });
    setOfferData((prev) => ({ ...prev, additionalImages: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const [mainImagePreview, setMainImagePreview] = useState(null);
    // const [imagesPreview, setImagesPreview] = useState(null);

    // const formData = new FormData();
    // formData.append("formData", JSON.stringify(offerData));
    // formData.append("mainImage", offerData.mainImage);
    // offerData.additionalImages.forEach((image) => {
    //   formData.append("additionalImages", image);
    // });

    try {
      const response = await addSale(
        offerData,
        mainImagePreview,
        additionalImagePreviews
      );
      console.log("Sale created successfully:", response.data);
    } catch (error) {
      console.error("Error creating sale:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      <div className="h-[10vh] flex fixed top-0 w-full z-20 items-center justify-between bg-[#242F66] p-4">
        <p className="text-white font-bold">Seller Dashboard</p>
        <div className="flex gap-5">
          <User className="text-white" size={25} />
          <LogOut className="text-white" size={25} />
        </div>
      </div>

      <div className="flex mt-[10vh] h-[calc(100vh - 10vh)] ">
        {/* Sidebar */}
        <div className="w-[20%] fixed left-0 top-[10vh] bg-[#FFFFFF] h-full p-2 ">
          <div>
            <Link
              to="/seller/dashboard"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <LayoutDashboard /> Dashboard{" "}
            </Link>
            <Link
              to="/seller/homepage"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <Home />
              Home Page{" "}
            </Link>
            <Link
              to="/seller/category"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <Component /> Category{" "}
            </Link>
            <Link
              to="/seller/uipage"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <PanelsTopLeft />
              UI Components{" "}
            </Link>
            <Link
              to="/seller/addproduct"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <SquarePlus /> Add Product{" "}
            </Link>
            <Link
              to="/seller/showproducts"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <Shirt />
              Show Products{" "}
            </Link>
            <Link
              to="/seller/users"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <Users />
              Manage Users{" "}
            </Link>
            <Link
              to="/seller/orders"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <ShoppingBag /> Orders{" "}
            </Link>
            <Link
              to="/seller/payment"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <CreditCard /> Payment{" "}
            </Link>
            <Link
              to="/seller/setting"
              className="flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white"
            >
              {" "}
              <Settings2 />
              Setting{" "}
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-[80%] ml-[20%] bg-[#f5f7f9] h-full p-4 text-[#2E4767]">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#242F66]">
              Add New Sale
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Sale Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {mainImagePreview ? (
                      <img
                        src={mainImagePreview}
                        alt="Preview"
                        className="mx-auto h-32 w-auto"
                      />
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="main-image-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload main image</span>
                        <input
                          id="main-image-upload"
                          name="main-image-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleMainImageChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Sale Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {additionalImagePreviews.length > 0 ? (
                      <div className="flex flex-wrap justify-center gap-2">
                        {additionalImagePreviews.map((preview, index) => (
                          <img
                            key={index}
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="h-24 w-auto object-cover"
                          />
                        ))}
                      </div>
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="additional-images-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload additional images</span>
                        <input
                          id="additional-images-upload"
                          name="additional-images-upload"
                          type="file"
                          multiple
                          className="sr-only"
                          onChange={handleAdditionalImagesChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB each
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Sale Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sale Type
                  </label>
                  <div className="space-y-2">
                    {[
                      "mega",
                      "festival",
                      "season",
                      "limited",
                      "Black Friday",
                      "Buy - Get - ",
                    ].map((type) => (
                      <label
                        key={type}
                        className="inline-flex items-center mr-4"
                      >
                        <input
                          type="radio"
                          name="saletype"
                          value={type}
                          onChange={(e) =>
                            setOfferData({ ...offerData, name: e.target.value })
                          }
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {offerData.name === "Buy - Get - " && (
                  <div>
                    <div>
                      <label
                        htmlFor="buy"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Buy -
                      </label>
                      <input
                        type="text"
                        name="buy"
                        id="buy"
                        value={offerData.buy}
                        onChange={(e) =>
                          setOfferData({ ...offerData, buy: e.target.value })
                        }
                        className="mt-1 p-2 border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="get"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Get -
                      </label>
                      <input
                        type="text"
                        name="get"
                        id="get"
                        value={offerData.get}
                        onChange={(e) =>
                          setOfferData({ ...offerData, get: e.target.value })
                        }
                        className="mt-1 p-2 border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      />
                    </div>
                  </div>
                )}

                <div className="col-span-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={offerData.isApplicableForAllProducts}
                      onChange={(e) => {
                        setOfferData((prev) => ({
                          ...prev,
                          isApplicableForAllProducts: e.target.checked,
                          category: e.target.checked ? "" : prev.category,
                          subcategories: e.target.checked
                            ? []
                            : prev.subcategories,
                        }));
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Apply to all categories
                    </span>
                  </label>
                </div>

                {/* Category and Subcategory selection */}
                {!offerData.isApplicableForAllProducts && (
                  <>
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat._id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subcategories"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subcategories
                      </label>
                      <select
                        id="subcategories"
                        name="subcategories"
                        multiple
                        value={selectedSubcategories}
                        onChange={handleSubcategoryChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                        disabled={!selectedCategory}
                      >
                        {subCategories.map((subCat) => (
                          <option key={subCat._id} value={subCat._id}>
                            {subCat.name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1 text-xs text-gray-500">
                        Hold Ctrl (Windows) or Cmd (Mac) to select multiple
                      </p>
                    </div>
                  </>
                )}

                {offerData.name != "Buy - Get - " && (
                  <>
                    {/* Discount */}
                    <div>
                      <label
                        htmlFor="discount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Discount
                      </label>
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        value={offerData.discount}
                        onChange={(e) =>
                          setOfferData({
                            ...offerData,
                            discount: e.target.value,
                          })
                        }
                        className="mt-1 p-2 border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      />
                    </div>

                    {/* Discount Type */}
                    <div>
                      <label
                        htmlFor="discountType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Discount Type
                      </label>
                      <select
                        id="discountType"
                        name="discountType"
                        value={offerData.discountType}
                        onChange={(e) =>
                          setOfferData({
                            ...offerData,
                            discountType: e.target.value,
                          })
                        }
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                      >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed Amount</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Start Date */}
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={offerData.startDate}
                    onChange={(e) =>
                      setOfferData({ ...offerData, startDate: e.target.value })
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={offerData.endDate}
                    onChange={(e) =>
                      setOfferData({ ...offerData, endDate: e.target.value })
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Sale
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UISalePage;
