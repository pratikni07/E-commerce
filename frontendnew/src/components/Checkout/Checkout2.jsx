import { Button } from '@nextui-org/button';
import React from 'react';
import OrderSummary from './OrderSummary';

const Checkout2 = () => {
  return (
    <div className='w-[90%] lg:w-[85%] m-auto mb-[300px]'>
      <h1 className='text-3xl font-bold mb-9 mt-8 textColor flex justify-center'>MAKE A PAYMENT </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-[65%] px-5 mb-8 lg:mb-0'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='text-lg font-bold'>ONLINE PAYMNET OPTIONS</h2>
          </div>
          <div>
            <div className='flex justify-between items-center mb-5'>
                
            </div>
          </div>
          
        </div>
        <div className='w-full lg:w-[35%]  lg:pl-5 pt-8 lg:pt-0'>
          {/* Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </div>
  );
}

export default Checkout2;
