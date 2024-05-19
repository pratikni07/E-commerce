import React from 'react'
import { User, LogOut, LayoutDashboard, Home, Shirt, Component ,SquarePlus,PanelsTopLeft,Settings2,Users,ShoppingBag ,CreditCard} from 'lucide-react';
import { Link } from 'react-router-dom'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const AddProducts = () => {
  return (
    <div className='h-full'>
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
                <Link to='/seller/showproducts' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> < Shirt/>Show Products </Link>
                
                <Link to='/seller/users' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <Users />Manage Users </Link>
                <Link to='/seller/orders' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <ShoppingBag /> Orders </Link>
                <Link to='/seller/payment' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> <CreditCard /> Payment </Link>
                <Link to='/seller/setting' className='flex items-center text-[16px] gap-3 p-4 text-[#2E4767] font-sans font-bold hover:bg-[#2D1967] hover:rounded-md hover:text-white'> < Settings2 />Setting </Link>
              </div>
            </div>
        {/* Right bar */}
        <div className='w-[80%] ml-[20%] bg-[#f5f7f9] h-full p-4 text-[#2E4767]'>
                <div className='bg-white p-5 rounded-md'>
                    <h1 className='text-[23px] font-bold '>
                        Add Product
                    </h1>
                    <div>
                        <form className='flex flex-col gap-3'>
                            <Label>Product Name</Label>
                            <Input type="text" placeholder="Product Name" name="name" />
                            <Label>Product Short Description</Label>
                            <Textarea placeholder="Product Short Description" name="shortDescription" />
                            <div className='flex justify-between'>
                                <div>
                                    <Label>Product Original Price</Label>
                                    <Input type="number" className="w-[330px]" />
                                </div>
                                <div>
                                    <Label>Selling Price</Label>
                                    <Input type="number" className="w-[330px]"  />
                                </div>
                                <div>
                                    <Label>Discount</Label>
                                    <Input type="number" className="w-[330px]"  />
                                </div>
                            </div>
                            <Label>Product Short Description</Label>
                            <Textarea placeholder="Product Short Description" name="shortDescription" />
                            <div className='flex' >
                                {/* category */}
                                <div className='w-[50%] px-2'>
                                    <Label>Category</Label>
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
                                <div className='w-[50%] px-2'>
                                    <Label>Sub Category</Label>
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

                            <Label>Stock</Label>
                            <Input type="number"/>
                            <div>
                                <Button className="bg-[#242F66] hover:bg-[#242F66] ">
                                    <Input type="submit" value="Add Product" className='bg-[#242F66] border-none cursor-pointer'/>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
    
    </div>
  )
}

export default AddProducts
