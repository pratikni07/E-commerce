import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../slices/cartSlice"; 
import { Trash2 } from 'lucide-react';

export function SheetDemo() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalItems = cart.totalItems;
  const product = cart.cart
  const totalPrice = cart.total
  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Badge content={totalItems} className="bg-[#8E3E63] text-white mt-[7px]">
            <ShoppingBag className="mt-[7px]" />
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#fafafa] p-4 flex flex-col justify-between h-full">
        <div>
          <SheetHeader>
            <SheetTitle className="text-[#242F66] text-2xl font-bold">
              {
                totalItems > 0 ? ("Ready To Checkout"):("Cart")
              }
            </SheetTitle>
            <SheetDescription>
            {
                totalItems > 0 ? ("Review your items before proceeding to checkout."):("")
              }
              
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 flex-grow overflow-auto">
            {totalItems > 0 ? (
              product.map((item, index) => (
                <div
                  key={index}
                  className="flex p-4 mb-4 border border-gray-300 rounded-md gap-4 justify-between items-center bg-white shadow-sm"
                >
                  <div className="flex gap-4">
                    <Link to={`/product/${item._id}`}>
                    <img
                      src={item.images[0]}
                      alt="cart item"
                      className="w-20 h-30 rounded-md object-cover"
                    />
                    </Link>
                    <div className="flex flex-col justify-center">
                    <Link to={`/product/${item._id}`}>
                      <h3 className="text-[#242F66] font-semibold">{item.name}</h3>
                      </Link>
                      <div className="flex mt-1 text-white items-center">
                        <button
                          className="text-white bg-[#8E3E63] border-r-1 border-[#242F66] px-3 py-1 rounded-l hover:bg-[#7A354C] transition duration-300"
                          onClick={() => handleDecrease(item._id)}
                        >
                          -
                        </button>
                        <span className="text-white bg-[#8E3E63] border-none px-3 py-1">
                          {item.quantity}
                        </span>
                        <button
                          className="text-white bg-[#8E3E63] border-l-1 border-[#242F66] px-3 py-1 rounded-r hover:bg-[#7A354C] transition duration-300"
                          onClick={() => handleIncrease(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <p className="text-sm text-gray-600">Price: ${item.newPrice * item.quantity}</p>
                  </div>
                 
                </div>
              ))
            ) : (
              <div className="flex justify-center flex-col items-center mt-[100px]">
                <img
                  src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
                  width={200}
                  alt="Empty cart"
                />
                <h1 className="textColor font-bold text-[20px] mt-[50px] ">
                  Your Cart Is Empty 
                </h1>
              </div>
            )}
          </div>
        </div>
        {totalItems > 0 && (
          <SheetFooter className="mt-auto">
            <Link to="/checkout" className="w-full">
              <Button className="bg-[#8E3E63] text-white px-4 py-2 rounded-md w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
