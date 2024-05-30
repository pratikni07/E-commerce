import React, { useState } from 'react'

const OrderPage = () => {
    const [orders,setOrders] = useState(0)
  return (
    <div>
      { orders==0 ? (
        <div>
            <h1>No orders yet</h1>
            <button onClick={()=>setOrders(1)}>Create Order</button>
            </div>
      ):(
        <div>
            <h1>Order Created</h1>
            <button onClick={()=>setOrders(0)}>Cancel Order</button>
        </div>

      )}
    </div>
  )
}

export default OrderPage
