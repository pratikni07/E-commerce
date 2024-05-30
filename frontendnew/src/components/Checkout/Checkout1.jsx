import { Button } from '@nextui-org/button';
import React from 'react';

import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Input } from '@nextui-org/react';
import OrderSummary from './OrderSummary';

const Checkout1 = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className='w-[90%] lg:w-[85%] m-auto mb-[300px]'>
      <h1 className='text-3xl font-bold mb-9 mt-8 textColor flex justify-center'>Checkout Items</h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-[65%] px-5 mb-8 lg:mb-0'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='text-lg font-bold'>Select Address</h2>

            <Button onPress={onOpen} className='bg-[#8E3E63] hover:bg-[#7A3457] text-white font-bold py-2 px-4 rounded text-[12px]'>Add New Address </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1"> ADD NEW ADDRESS </ModalHeader>
                    <ModalBody>
                      <Input type='text' label='Name' isRequired/>
                      <Input type='number' label='Mobile' isRequired/>
                      <div className='block lg:flex gap-2'>
                        {/* pincode and state  */}
                        <Input type='text' label='Pincode' isRequired/>
                        <Input type='text' label='State' isRequired/>  
                      </div>
                      
                      <Input type='text' label='Address ( House No, Building , Street , Area )' isRequired/>
                      <Input type='text' label='City / District' isRequired/>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cancel
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Save
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className='flex flex-wrap justify-between gap-4 mb-6'>
            <div className='w-full bg-slate-100 p-4 rounded'>
              <p className='font-bold'>
                Pratik Nikat
              </p>
              <p>123, ABC Street, XYZ Colony, New Delhi, Delhi, 110001</p>
            </div>
          </div>
          <hr/>
        </div>
        <div className='w-full lg:w-[35%]  lg:pl-5 pt-8 lg:pt-0'>
          {/* Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </div>
  );
}

export default Checkout1;
