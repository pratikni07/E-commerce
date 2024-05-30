import React, { useState, useEffect } from 'react';
import { User, LogOut, LayoutDashboard, Home, Shirt, Component, SquarePlus, PanelsTopLeft, Settings2, Users, ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';
import { Input } from '@nextui-org/input';
import {Textarea} from "@nextui-org/input";
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/services/operations/productAPI';
import { getAllCategories } from '@/services/operations/categoryAPI';
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
const AddProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);
    const [productData, setProductData] = useState({
        name: '',
        shortdescription: '',
        newPrice: 0,
        oldPrice: 0,
        discount: 0,
        images: [],
        description: '',
        category: '',
        subcategory: '',
        stock: 0,
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

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        setSelectedCategory(selectedCategoryId);
    
        // Find the selected category object
        const selectedCategoryObj = categories.find(category => category._id === selectedCategoryId);
    
        // Update productData with the selected category
        setProductData(prevState => ({
            ...prevState,
            category: selectedCategoryId,
            // Reset subcategory when category changes
            subcategory: '',
        }));
    
        // If the selected category has subcategories, update the subcategories state
        if (selectedCategoryObj && selectedCategoryObj.subcategories) {
            setSubcategories(selectedCategoryObj.subcategories);
        } else {
            // If the selected category has no subcategories, reset the subcategories state
            setSubcategories([]);
        }
    };
    

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProductData(prevState => ({
                        ...prevState,
                        images: [...prevState.images, reader.result]
                    }));
                };
                reader.readAsDataURL(files[i]);
            }
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(productData);
            await dispatch(addProduct(productData,navigate));
            setProductData({
                name: '',
                shortdescription: '',
                newPrice: 0,
                oldPrice: 0,
                discount: 0,
                images: [],
                description: '',
                category: '',
                subcategory: '',
                stock: 0,
            });
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className='h-full'>
            {loading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <HashLoader color="#ffffff" size={50} />
            </div>
        )}
            <div className='h-[10vh] flex fixed top-0 w-full z-20 items-center justify-between bg-[#242F66] p-4'>
                <p className='text-white font-bold'>Seller Dashboard</p>
                <div className='flex gap-5'>
                    <User className='text-white' size={25} />
                    <LogOut className='text-white' size={25} />
                </div>
            </div>

            <div className='flex mt-[10vh] h-[calc(100vh - 10vh)] '>
                {/* Left Bar */}
                <div className='w-[20%] fixed left-0 top-[10vh] bg-[#FFFFFF] h-full p-2 '>
                    <div>
                        <Link to='/seller/dashboard' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <LayoutDashboard /> Dashboard </Link>
                        <Link to='/seller/homepage' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Home />Home Page </Link>
                        <Link to='/seller/category' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Component /> Category </Link>
                        <Link to='/seller/uipage' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <PanelsTopLeft />UI Components </Link>
                        <Link to='/seller/addproduct' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <SquarePlus /> Add Product </Link>
                        <Link to='/seller/showproducts' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Shirt/>Show Products </Link>
                        <Link to='/seller/users' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Users />Manage Users </Link>
                        <Link to='/seller/orders' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <ShoppingBag /> Orders </Link>
                        <Link to='/seller/payment' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <CreditCard /> Payment </Link>
                        <Link to='/seller/setting' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Settings2 />Setting </Link>
                    </div>
                </div>
                {/* Right bar */}
                <div className='w-[80%] ml-[20%] bg-[#f5f7f9] h-full p-4 text-[#2E4767]'>
                    <div className='bg-white p-5 rounded-md'>
                        <h1 className='text-[23px] font-bold '>
                        Add Product
                    </h1>
                    <div>
                        <form className='flex flex-col gap-3' onSubmit={submitHandler}>
                            <Label>Product Name</Label>
                            <Input type="text" value={productData.name} onChange={changeHandler} placeholder="Product Name" name="name" />
                            <Label>Product Short Description</Label>
                            <Textarea placeholder="Product Short Description" value={productData.shortdescription} onChange={changeHandler} name="shortdescription" />
                            <div className='flex justify-between'>
                                <div>
                                    <Label>Product Original Price</Label>
                                    <Input type="number" className="w-[330px]" value={productData.oldPrice} onChange={changeHandler} name="oldPrice" />
                                </div>
                                <div>
                                    <Label>Selling Price</Label>
                                    <Input type="number" className="w-[330px]" value={productData.newPrice} onChange={changeHandler} name="newPrice" />
                                </div>
                                <div>
                                    <Label>Discount</Label>
                                    <Input type="number" className="w-[330px]" value={productData.discount} onChange={changeHandler} name="discount" />
                                </div>
                            </div>

                            {/* Upload multiple photos */}
                            <Label>Product Images</Label>
                            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

                            {/* Display selected images */}
                            {productData.images.length > 0 && (
                                <div className='p-4 flex flex-wrap border rounded-md'>
                                    {productData.images.map((image, index) => (
                                        <img key={index} src={image} alt={`Product ${index + 1}`} className="w-32 h-32 object-cover rounded-md mr-2 mb-2" />
                                    ))}
                                </div>
                            )}

                            {/* Additional fields */}
                            <Label>Product Long Description</Label>
                            <Textarea placeholder="Product Long Description" value={productData.description} onChange={changeHandler} name="description" />
                            <div className='flex' >
                                {/* category */}
                                <div className='w-[50%] px-2'>
                                    <Label>Category</Label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 mt-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={productData.category}
                                        onChange={handleCategoryChange}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category._id} value={category._id}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* subcategory */}
                                <div className='w-[50%] px-2'>
                                    <Label>Sub Category</Label>
                                    <select
                                        id="subcategory"
                                        name="subcategory"
                                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 mt-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={productData.subcategory}
                                        onChange={changeHandler}
                                    >
                                        <option value="">Select Subcategory</option>
                                        {subcategories.map((subcategory) => (
                                            <option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <Label>Stock</Label>
                            <Input type="number" value={productData.stock} onChange={changeHandler} name="stock" />
                            <div>
                                <Button className="bg-[#242F66] hover:bg-[#242F66] mt-5 ">
                                    {/* Display Loading Indicator */}
                                    {loading ? <div>Loading...</div> : <Input type="submit" value="Add Product" className='border-none bg-transparent cursor-pointer' />}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AddProducts;
