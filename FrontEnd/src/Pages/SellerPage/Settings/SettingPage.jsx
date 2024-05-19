import React from 'react'

import { User, LogOut, LayoutDashboard, Home, Shirt, Component ,SquarePlus,PanelsTopLeft,Settings2,Users,ShoppingBag ,CreditCard} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FilePenLine, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
const SettingPage = () => {
    return (
        <div   >
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
                <h1 className='text-[20px] font-semibold  mb-8'>WellCome Pratik.....</h1>
                <div className='flex w-[80%] m-auto gap-9 items-center'>
                    <div>
                        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' width={200}  className="rounded-[50%]" />
                    </div>
                    <div>
                        <h1 className='text-[25px] font-semibold '>Pratik Nikat</h1>
                        <p>Sai Clotings</p>
                        <p>pratiknikat01@gmail.com</p>
                        <p>1234567890</p>
                        <Button>Edit</Button>
                    </div>
                </div>
              </div>
              <div className='bg-white p-5 rounded-md mt-4'>
                <h1 className='text-[20px] font-semibold '>Shop Details...</h1>
                <h1><span className='font-bold'>Shop Address :</span> Shop 129 , bhigwan road , Baramati . 413102</h1>
                <h1><span className='font-bold'>Shop Name :</span> Sai Clotings</h1>
                <h1><span className='font-bold'>Shop Email :</span>pratiknikat01@gmail.com</h1>
                <h1><span className='font-bold'>Shop Contact :</span> 1234567890</h1>
                <Button className="mt-3">Edit</Button>
              </div>
              <div className='bg-white p-5 rounded-md mt-4'>
                <h1 className='text-[20px] font-semibold '>Payment Details</h1>
                <h1><span className='font-bold'>Card Number :</span> **** **** **** 5432</h1>
                <h1><span className='font-bold'>Card Holder Name :</span> Pratik Nikat</h1>
                <h1><span className='font-bold'>Expiry Date :</span> 12/2025</h1>
                <h1><span className='font-bold'>CVV :</span> **3</h1>

                <Button className="mt-3">Edit</Button>

              </div>
              <div className='bg-white rounded-md mt-4'>
                <div className='bg-white p-5 rounded-md mt-4'>
                  <h1 className='text-[20px] font-semibold '>Change Password</h1>
                  <div className='flex gap-5 mt-4'>
                    <input type='password' placeholder='Old Password' className='border p-2 rounded-md w-[40%]' />
                    <input type='password' placeholder='New Password' className='border p-2 rounded-md w-[40%]' />
                  </div>
                  <Button className="mt-3">Change Password</Button>
                </div>
              </div>
              {/* <div>
                <div className='bg-white p-5 rounded-md mt-4'>
                  <h1 className='text-[20px] font-semibold '>Delete Account</h1>
                  <p>Are you sure you want to delete your account ?</p>
                  <Button className="mt-3">Delete Account</Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )
}

export default SettingPage
