import React from 'react'
import {Image} from "@nextui-org/react";

const ProductCard = ({imgURL,title,oprice,nprice}) => {
  return (
    <div className='w-[150px] md:w-[200px] lg:w-[240px] bg-white rounded-md overflow-hidden shadow-lg cursor-pointer'>
      <Image
      isZoomed
      width={240}
      height={200}
      alt="NextUI Fruit Image with Zoom"
      src={imgURL}
    />
        <div  className='p-2 bg-white flex flex-col'>
            <p>{title}</p>
            <div className='flex'>
                <h2 className='font-bold textColor'> $ {nprice}</h2>
                <p className='line-through ml-2'>$ {oprice}</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard
