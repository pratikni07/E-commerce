import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
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
import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getAllProducts } from "@/services/operations/productAPI";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      setProducts(res);
      //   console.log(res.data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="h-[10vh] flex fixed top-0 w-full z-20 items-center justify-between bg-[#242F66] p-4">
        <p className="text-white font-bold">Seller Dashboard</p>
        <div className="flex gap-5">
          <User className="text-white" size={25} />
          <LogOut className="text-white" size={25} />
        </div>
      </div>

      <div className="flex mt-[10vh] h-[calc(100vh - 10vh)]">
        {/* Left Bar */}
        <div className="w-[20%] fixed left-0 top-[10vh] bg-[#FFFFFF] h-full p-2">
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
        {/* Right bar */}
        <div className="w-[80%] ml-[20%] bg-[#f5f7f9] h-full p-4 text-[#2E4767]">
          <div className="bg-white p-5 rounded-md">
            <h1>Products</h1>
            {products.length === 0 ? (
              <p>No products</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Sub Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-[100px]">Edit</TableHead>
                    <TableHead className="text-right w-[100px]">
                      Delete
                    </TableHead>
                    <TableHead className="text-right w-[100px]">
                      View More
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">
                        <div>
                          <img
                            className="object-contain"
                            src={product.images[0]}
                            width={100}
                            height={200}
                          />
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell>{product.category.name}</TableCell>
                      <TableCell>{product.subcategory.name}</TableCell>
                      <TableCell> $ {product.newPrice}</TableCell>
                      <TableCell className="cursor-pointer">
                        <FilePenLine />
                      </TableCell>
                      <TableCell className="text-right cursor-pointer">
                        <Trash2 />
                      </TableCell>
                      <TableCell>
                        <Button>View More</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
