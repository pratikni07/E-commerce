import React from 'react'
import { Button } from '@nextui-org/button'
const OrderSummary = () => {
  return (
    <div>
      <div className='bg-slate-50 p-4 rounded-md'>
            <h2 className='text-lg font-bold mb-4'>Order Summary</h2>
            <div>
              {/* Product image price and quantity  */}
              <div className='flex justify-between mb-4'>
                <div className='flex gap-4'>
                  <img src='https://interwove.in/cdn/shop/products/bamboo-classic-crew-neck-t-shirt-427588_960x1200_crop_center.jpg?v=1693539969' alt='product' className='object-cover rounded w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]' />
                  <div>
                    <p>Nike T shirt for Mens </p>
                    <p className='text-lg font-bold'>₹ 500</p>
                  </div>
                </div>
                <div>
                  <select className='bg-[#8E3E63] text-white rounded p-1 px-2' >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-between mb-4'>
                <div className='flex gap-4'>
                  <img src='https://interwove.in/cdn/shop/products/bamboo-classic-crew-neck-t-shirt-427588_960x1200_crop_center.jpg?v=1693539969' alt='product' className='object-cover rounded w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]' />
                  <div>
                    <p>Nike T shirt for Mens </p>
                    <p className='text-lg font-bold'>₹ 500</p>
                  </div>
                </div>
                <div>
                  <select className='bg-[#8E3E63] text-white rounded p-1 px-2' >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
            <hr/>
            <div>
              <div className='flex justify-between py-2 mb-3 mt-3'>
                <p>Subtotal</p>
                <p className='font-bold'>$ 100</p>
              </div>
              <hr />
              <div className='flex justify-between py-2 mb-9'>
                <p>Shipping Cost</p>
                <p className='font-bold'>$ 10</p>
              </div>
              <hr />
              <div className='flex justify-between py-2'>
                <p className='font-bold'>Order Total</p>
                <p className='font-bold'>$ 110</p>
              </div>
            </div>
            <Button className='w-full rounded-sm font-bold bg-[#8E3E63] text-white mt-5'>Process For Payment</Button>
          </div>
    </div>
  )
}

export default OrderSummary
