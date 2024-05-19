import { Button } from '@/components/ui/button';
import React from 'react';
import HomeSliderForm from '../Forms/HomeSliderForm';

const UIHomeSlider = () => {
  return (
    <div className='p-3 border-b border-slate-700 rounded-md bg-white'>
      <div className='mb-9'>
        <h1 className='font-bold text-2xl'>Home Slider</h1>
        {/* Add slide */}
      </div>
      <div>
        <div className='flex mb-4 justify-between'>
          {/* Add image here 200x200 */}
          <img src="https://nobero.com/cdn/shop/files/Homepage_Banner_6.webp?v=1709616576" alt="Slider Image" width={200} height={100} />
           <p>Silde1</p>
           <p>Category</p>
           <p>Sub Category</p>
           <p>Discount</p>
           <div className='flex gap-2'>
           <Button>Edit</Button>
           <Button className="bg-red-400 hover:bg-red-500 ">Delete</Button>
           </div>
        </div>
        <div className='flex mb-4 justify-between'>
          {/* Add image here 200x200 */}
          <img src="https://nobero.com/cdn/shop/files/Homepage_Banner_6.webp?v=1709616576" alt="Slider Image" width={200} height={100} />
           <p>Silde1</p>
           <p>Category</p>
           <p>Sub Category</p>
           <p>Discount</p>
           <div className='flex gap-2'>
           <Button>Edit</Button>
           <Button className="bg-red-400 hover:bg-red-500 ">Delete</Button>
           </div>
        </div>
      </div>
      <div>
        <HomeSliderForm/>
      </div>
     
    </div>
  );
};

export default UIHomeSlider;
