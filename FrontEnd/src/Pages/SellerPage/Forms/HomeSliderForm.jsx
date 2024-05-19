import React, { useState } from 'react';
import { Image } from 'lucide-react';

const HomeSliderForm = () => {
    const [imagePreview, setImagePreview] = useState(null);

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
        <form className="max-w-lg mx-auto mt-8">
            <div className="space-y-8">
                <div className="border-b border-gray-300 pb-8">
                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium text-[25px] leading-6 text-gray-900">
                            Slider Image
                        </label>
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
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileInputChange} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Title
                </label>
                <div className="mt-2">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="email"
                        className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    URL FOR Redirect / Path
                </label>
                <div className="mt-2">
                    <input
                        id="url"
                        name="url"
                        type="text"
                        className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                    Category
                </label>
                <div className="mt-2">
                    <select
                        id="category"
                        name="category"
                        className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-900">
                    SubCategory
                </label>
                <div className="mt-2">
                    <select
                        id="subcategory"
                        name="subcategory"
                        className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="discount" className="block text-sm font-medium text-gray-900">
                    Discount
                </label>
                <div className="mt-2">
                    <input
                        id="discount"
                        name="discount"
                        type="number"
                        className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
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
    );
};

export default HomeSliderForm;
