import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const OrderCard = ({status}) => {

  return (
    <div className='p-3 lg:p-8 m-2 bg-slate-100 rounded-sm flex justify-between'>
        <Link className='flex'> 
            <img src='https://nobero.com/cdn/shop/files/Pineapple_6ce64022-2675-4074-b89a-eb85d41360ca.jpg?v=1712044045' className='w-[100px] h-[100px] lg:w-[150px] lg:h-[200px]' />
            <div className='ml-2 lg:ml-5'>
                <h1 className='text-lg font-bold text-[13px] lg:text-[18px]'>Nike Mens T - Shirt </h1>
                {/* description */}
                <p className='text-sm hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit</p>
                <p className='text-[10px] lg:text-[15px]'>Quantity: 1</p>
                <p className='text-[10px] lg:text-[15px]'>Price: $50</p>
                {
                    status === 'Dispatch' ? (
                        <div>
                            <p className='mt-1 lg:mt-3 text-[10px] lg:text-[15px]'>Order Date : 13/05/2024</p>
                            <p className='font-bold text-[10px] lg:text-[15px]'>Order Id : 084948204840487</p>
                        </div>
                    ):(
                        <div>
                            <div className='flex items-center mt-9'>
                                <p className='text-[10px] lg:text-[15px] mr-2'>Rate Product : </p> 
                                <Star size={20} className='text-yellow-400' />
                                <Star size={20} className='text-yellow-400' />
                                <Star size={20} className='text-yellow-400' />
                                <Star size={20} className='text-yellow-400' />
                                <Star size={20} className='text-yellow-400' />
                            </div>
                            <p>
                                <button className='bg-green-500 text-white rounded-md p-2 mt-2 text-[10px] lg:text-[15px]'>Write Review</button>
                            </p>
                        </div>
                    )
                }
                
            </div>
        </Link>
        <div>
            <span className='bg-green-200 p-2 text-green-800 font-bold text-[10px] rounded-md lg:text-[14px]'>
                {status}
            </span>
        </div> 
    </div>
  )
}

export default OrderCard
