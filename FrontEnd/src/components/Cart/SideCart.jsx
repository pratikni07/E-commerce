import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
const SideCart = () => {
  return (
    <SheetContent>
      <SheetHeader>

        <SheetTitle className="text-[20px]">Your Cart!</SheetTitle>
        <SheetDescription>
          <div className="flex p-2 pr-5 border border-[#242F66]-200 rounded-md gap-2 justify-between">
            <div className="flex gap-4">
              <img
                src="https://nobero.com/cdn/shop/products/26cbg-1162.jpg?v=1691578795"
                alt="cart item"
                className="w-20 h-30 rounded-md"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-[#242F66] font-semibold">Product Name</h3>
                <p className="text-sm text-gray-600">Price: $100</p>
                <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              <div className="flex mt-1">
                <button className="text-[#242F66] border border-[#242F66] px-2 py-1 rounded-l">
                  +
                </button>
                <button className="text-[#242F66] border border-[#242F66] px-2 py-1 rounded-r">
                  -
                </button>
              </div>
            </div>
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default SideCart;
