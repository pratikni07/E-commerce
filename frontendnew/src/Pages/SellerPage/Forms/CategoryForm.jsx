import React, { useState } from 'react';
import { Image } from 'lucide-react';
import { Input } from '@nextui-org/input';
import { Button } from '@/components/ui/button';
import {Textarea} from "@nextui-org/input";
import { useDispatch } from 'react-redux';
import { addCategory } from '@/services/operations/categoryAPI';
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const LoadingOverlay = ({ loading }) => {
    return loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
            <HashLoader color="#242F66" loading={loading} size={50} />
        </div>
    ) : null;
};

const CategoryForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();
    const [categoryData, setCategoryData] = useState({
        category: "",
        description: ""
    });
    const [loading, setLoading] = useState(false); // State for loading indicator
    const navigate = useNavigate();

    const { category, description } = categoryData;

    const changeHandler = (e) => {
        setCategoryData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading indicator
        try {
            await dispatch(addCategory(categoryData, imagePreview, navigate));
        } catch (error) {
            console.error(error);
        }
        setLoading(false); // Stop loading indicator
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
            <LoadingOverlay loading={loading} />
            <form className='mt-3' onSubmit={submitHandler}>
                <div className="space-y-8">
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
                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
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
                <Input type="text" placeholder="Enter category" name="category"
                    value={category}
                    onChange={changeHandler} />

                <Textarea placeholder="Category Short description" className="mt-4" name="description" value={description} onChange={changeHandler} ></Textarea>
                <Button className="bg-[#242F66] hover:bg-[#242F66] mt-4">
                    <input type="submit" value="Submit" className="bg-[#242F66] border-none" />
                </Button>
            </form>
        </div>
    );
}

export default CategoryForm;
