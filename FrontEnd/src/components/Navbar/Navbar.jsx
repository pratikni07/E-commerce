import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideCart from "../Cart/SideCart";
import Profile from "./Profile";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="mb-3 ">
      <div className="w-[85%] m-auto py-3 flex items-center justify-between ">
        <div className="flex items-center">
          {/* Logo */}
          <Link to={"/"}>
            <img src="/assets/logo.png" alt="Logo" width={120} height={100} />
          </Link>
          <div className="flex ml-10">
            {/* Category */}
            <Link to={"/"} className="mx-3 font-bold ">
              Mens
            </Link>
            <Link to={"/"} className="mx-3 font-bold ">
              Women
            </Link>
            <Link to={"/"} className="mx-3 font-bold ">
              Summer T-Shirts
            </Link>
            <Link to={"/"} className="mx-3 font-bold ">
              Oversized T-Shirts
            </Link>
          </div>
        </div>

        <div className="flex items-center align-middle">
          {/* Search Bar Toggle */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/assets/icons/search.svg"
                  alt="Search"
                  width={25}
                  height={25}
                  onClick={toggleSearch}
                  className="mx-3 cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Press for open search bar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* User Icon */}

          <Profile/>

          {/* Cart Icon */}

          <Sheet>
            <SheetTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src="/assets/icons/cart.svg"
                      alt="Cart"
                      width={22}
                      height={22}
                      className="mx-3 pt-1"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </SheetTrigger>
            <SideCart />
          </Sheet>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="text-center flex px-5">
          <Input size="md" placeholder="Search for products" />
          {/* Close Button */}
          <button onClick={toggleSearch} className="px-2">
            <img
              src="/assets/icons/close.svg"
              alt="Close"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
