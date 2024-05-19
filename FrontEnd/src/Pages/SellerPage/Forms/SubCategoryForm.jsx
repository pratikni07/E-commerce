import React, { useState } from 'react';
import { Image } from 'lucide-react'; // Assuming Lucide React is correctly imported
import { addSubCategory } from '@/services/operations/categoryAPI'; // Assuming the API call is correctly implemented

const SubCategoryForm = ({ categories }) => {
    const [loading, setLoading] = useState(false);
    const [subCategoryData, setSubCategoryData] = useState({
        category: '',
        subcategory: '',
        description: '',
    });
    const { category, subcategory, description } = subCategoryData;
    const [imagePreview, setImagePreview] = useState(null);

    const changeHandler = (e) => {
        setSubCategoryData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(subCategoryData, imagePreview)
            setSubCategoryData({
                category: '',
                subcategory: '',
                description: '',
            });
            setImagePreview(null);
        } catch (error) {
            console.error(error);
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
        <div>
            <form className="mt-3" onSubmit={submitHandler}>
                <label htmlFor="category">Select Category</label>
                <select
                    id="category"
                    name="category"
                    className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={changeHandler}
                    value={category}
                >
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <div className="pb-8">
                    <div className="col-span-full">
                        <div className="mt-4 flex justify-center items-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                            <div className="text-center">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="mx-auto h-48 w-auto" />
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
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <label htmlFor="subcategory">Enter Sub Category</label>
                <input
                    type="text"
                    id="subcategory"
                    name="subcategory"
                    className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter sub category"
                    onChange={changeHandler}
                    value={subcategory}
                />

                <label htmlFor="description">Category Short description</label>
                <textarea
                    id="description"
                    name="description"
                    className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Category Short description"
                    onChange={changeHandler}
                    value={description}
                ></textarea>

                <button type="submit" className="bg-[#242F66] hover:bg-[#242F66] mt-4 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SubCategoryForm;
