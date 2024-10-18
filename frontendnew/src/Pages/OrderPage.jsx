import React, { useState } from 'react'

import OrderCard from '@/components/Cards/OrderCard'
const OrderPage = () => {
    const [orders,setOrders] = useState(1)
  return (
    <div>
      <div className='w-[90%] lg:w-[65%] m-auto mb-[300px]'>
        <h1 className='text-3xl font-bold mb-9 mt-8 textColor flex justify-center'>Track Your Order</h1>
        <div className='p-4 border rounded-md'>
        { orders==0 ? (
          <div>
              <h1>No orders yet</h1>
              <button onClick={()=>setOrders(1)}>Create Order</button>
              </div>
        ):(
          <div >
            <div className='p-4 bg-green-50 text-green-800 font-bold m-2 rounded-md'>
              On The Way Items
            </div>
            <OrderCard status={"Dispatch"}/>
            
            <div className='p-4 bg-green-50 text-green-800 font-bold m-2 rounded-md'>
              Delivered Items 
            </div>

            <OrderCard status={"Delivered"}/>

          </div>

        )}
        </div>
      </div>
    </div>
  )
}

export default OrderPage
