import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "@/slices/cartSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const OrderSummary = ({ selectedAddress }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalItems = cart.totalItems;
  const product = cart.cart;
  const totalPrice = cart.total;

  const message = "Free Shipping Above 499";
  const [shippingCost, setShippingCost] = useState(0);

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const item = product.find((item) => item._id === productId);
    const difference = newQuantity - item.quantity;

    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        handleIncrease(productId);
      }
    } else {
      for (let i = 0; i < Math.abs(difference); i++) {
        handleDecrease(productId);
      }
    }
  };

  const handleCheckout = () => {
    if (selectedAddress) {
      onOpen();
    } else {
      alert("Select an address first");
    }
  };

  const handleConfirmPayment = async () => {
    // Your payment logic here
    // Close the confirmation modal
    onClose();
  };

  const getShippingCost = () => {
    if (totalPrice >= 499) {
      setShippingCost(0);
    } else {
      setShippingCost(50);
    }
  };
  useEffect(() => {
    getShippingCost();
  }, [totalPrice]);

  return (
    <div>
      <div className="bg-slate-50 p-4 rounded-md">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div>
          {product.map((item, index) => (
            <div key={index} className="flex justify-between mb-4">
              <div className="flex gap-4">
                <img
                  src={item.images[0]}
                  alt="product"
                  className="object-cover rounded w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-lg font-bold">
                    ₹ {item.newPrice * item.quantity}
                  </p>
                </div>
              </div>
              <div>
                <select
                  className="bg-[#8E3E63] text-white rounded p-1 px-2"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, parseInt(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <div className="flex justify-between py-2 mb-3 mt-3">
            <p>Subtotal</p>
            <p className="font-bold">₹ {totalPrice}</p>
          </div>

          {/* coupon */}
          <div className="rounded-md mb-4">
            <div className="bg-white flex p-2 justify-between rounded-md cursor-pointer ">
              <p className="text-gray-500">Select coupon</p>
              <p>X</p>
            </div>
          </div>

          <hr />
          <div className="flex justify-between py-2 mb-9">
            <p>Shipping Cost</p>
            {<p className="font-bold">₹ {shippingCost}</p>}
          </div>

          <hr />
          <div className="flex justify-between py-2">
            <p className="font-bold">Order Total</p>
            <p className="font-bold">₹ {totalPrice + shippingCost}</p>
          </div>
        </div>
        <Button
          className="w-full rounded-sm font-bold bg-[#8E3E63] text-white mt-5"
          onClick={handleCheckout}
        >
          {selectedAddress ? "Proceed to Payment" : "Select Address First"}
        </Button>
      </div>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Confirm Your Order</ModalHeader>
          <ModalBody>
            {selectedAddress ? (
              <div className="flex flex-wrap justify-between gap-4 mb-6">
                <div className="w-full bg-slate-100 p-4 rounded">
                  <div>
                    <h1 className="ml-2 font-bold">{selectedAddress.name}</h1>
                    <h3>{`${selectedAddress.address} ${selectedAddress.city} ${selectedAddress.state} ${selectedAddress.pincode}`}</h3>
                    <h3>{selectedAddress.mobile}</h3>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <></>
            )}
            {product.map((item, index) => (
              <div key={index} className="flex justify-between mb-4">
                <div className="flex gap-4">
                  <img
                    src={item.images[0]}
                    alt="product"
                    className="object-cover rounded w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-lg font-bold">
                      ₹ {item.newPrice * item.quantity}
                    </p>
                  </div>
                </div>
                <div>
                  <select
                    className="bg-[#8E3E63] text-white rounded p-1 px-2"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, parseInt(e.target.value))
                    }
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className="flex justify-between py-2">
              <p className="font-bold">Order Total</p>
              <p className="font-bold">₹ {totalPrice + shippingCost}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onClick={onClose}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleConfirmPayment}>
              Make Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderSummary;
