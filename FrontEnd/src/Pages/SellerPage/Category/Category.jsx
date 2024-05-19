import React from 'react'
import { User, LogOut, LayoutDashboard, Home, Shirt, Component,Search,FilePenLine,Trash2 ,SquarePlus,PanelsTopLeft,Settings2,Users,ShoppingBag ,CreditCard} from 'lucide-react';
import { Link } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
const Category = () => {
  return (
    <div >
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
            {/* Add Catorgy  */}
            {/* add Subcategory  */}
            {/* Show Category  */}
            {/* show subcategories  */}

            <div className='bg-white p-4 rounded-md'>
                <h1 className='font-bold text-[20px]'>Add Category</h1>
                <form className='mt-3'>
                    <Input type="text" placeholder="Enter category" />
                    <Button className="bg-[#242F66] hover:bg-[#242F66] mt-4 ">
                        <Input type="submit" value="Submit" className="bg-[#242F66] border-none"/>
                    </Button>
                </form>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <h1 className='font-bold text-[20px]'>Add SubCategory</h1>
                <form className='mt-3'>
                    <Label > Select Category</Label>
                    <select
                        id="subcategory"
                        name="subcategory"
                        className="block w-full rounded-md border border-gray-300 mb-3 py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    <Input type="text" placeholder="Enter sub category" />
                    <Button className="bg-[#242F66] hover:bg-[#242F66] mt-4 ">
                        <Input type="submit" value="Submit" className="bg-[#242F66] border-none"/>
                    </Button>
                </form>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <div className='flex justify-between mb-5 items-center'>
                    <h1 className='font-bold text-[20px]'>Category</h1>
                    <div >
                        <form className='flex'>
                            {/* search */}
                            <Input type="text" placeholder="Search" className='w-[300px] rounded-none' />
                            <Button className="bg-[#242F66] hover:bg-[#242F66] rounded-none"> <Search /> </Button>
                        </form>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[200px]">Category</TableHead>
                        <TableHead>Sub Categories</TableHead>
                        <TableHead>Products</TableHead>

                        <TableHead className="text-right w-[100px]">Edit</TableHead>
                        <TableHead className="text-right w-[100px]">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <div className='flex justify-between mb-5 items-center'>
                    <h1 className='font-bold text-[20px]'>SubCategory</h1>
                    <div >
                        <form className='flex'>
                            {/* search */}
                            <Input type="text" placeholder="Search" className='w-[300px] rounded-none' />
                            <Button className="bg-[#242F66] hover:bg-[#242F66] rounded-none"> <Search /> </Button>
                        </form>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[200px]">Category</TableHead>
                        <TableHead>Sub Categorie</TableHead>
                        <TableHead>Products</TableHead>
                        
                        <TableHead className=" w-[100px]">Edit</TableHead>
                        <TableHead className="text-right w-[100px]">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className=" cursor-pointer">
                                <FilePenLine />
                            </TableCell>
                            <TableCell className="text-right cursor-pointer items-center flex justify-center">
                                <Trash2 className='' />
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>

  </div>
  )
}

export default Category
