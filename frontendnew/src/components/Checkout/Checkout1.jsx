import { Button } from '@nextui-org/button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, useDisclosure } from "@nextui-org/modal";
import OrderSummary from './OrderSummary';
import Address from '../Address';
import { getAllAddress } from '@/services/operations/authAPI';
import { useToast } from "@/components/ui/use-toast"

const Checkout1 = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = useSelector((state) => state.profile);
  const userId = user?._id; // Use optional chaining to prevent errors if user is not defined
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    if (!user) {
      window.location.href = '/'; // Redirect to home 
    } else {
      const fetch = async () => {
        try {
          const res = await getAllAddress({ userId });
          setAddress(res.data.address);
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      };
      fetch();
    }
  }, [userId, user]);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  return (
    <div className='w-[90%] lg:w-[85%] m-auto mb-[300px]'>
      <h1 className='text-3xl font-bold mb-9 mt-8 textColor flex justify-center'>Checkout Items</h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-[65%] px-5 mb-8 lg:mb-0'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='text-lg font-bold'>Select Address</h2>
            <Button onPress={onOpen} className='bg-[#8E3E63] hover:bg-[#7A3457] text-white font-bold py-2 px-4 rounded text-[12px]'>Add New Address</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <Address isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
            </Modal>
          </div>
          <div>
            {address.map((add, index) => (
              <div key={index} className='flex flex-wrap justify-between gap-4 mb-6'>
                <div className='w-full bg-slate-100 p-4 rounded'>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      name="selectedAddress"
                      value={add._id}
                      onChange={() => handleAddressSelect(add)}
                      checked={selectedAddress === add}
                    />
                    <span className='ml-2 font-bold'>{add.name}</span>
                  </label>
                  <p>{`${add.address} ${add.city} ${add.state} ${add.pincode}`}</p>
                  <p>{add.mobile}</p>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>
        <div className='w-full lg:w-[35%] lg:pl-5 pt-8 lg:pt-0'>
          <OrderSummary selectedAddress={selectedAddress} />
        </div>
      </div>
    </div>
  );
}

export default Checkout1;
