import React from 'react';
import CategoryCard from '@/components/Cards/CategoryCard';
import Hero from '@/components/Home/Hero';
import Slider from './Slider';
import ProductCard from '@/components/Cards/ProductCard';
import { Button } from '@nextui-org/button';


const HomePage = () => {
  return (
    <div className="w-[90%] m-auto">
      <Hero />
      {/* <div className="mt-8">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer">
          <p>BEST SELLER</p>
        </div>
        <Slider/>
      </div> */}
      {/* display 8 bext seller prodcut  */}

      <div className="mt-8 ">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer">
          <p>TOP SELLING PRODUCTS</p>
        </div>
        {/* for small screen display 6 products for bigger screen display 8 product and for tab show 6  */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 p-4 rounded-md ">  
        {/* for small screen disply only 6  */}
          <ProductCard imgURL={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNnSSHMMFGoA-xZ2cuipNh5l3eh_xp43dSicp2-aq6moXh0iFf-u0rYxhmUAGKaLXre5jz07Y3gu4uh1Vyb6ZT6umW3tLbOsoU185QvdvauPvM144HyJywzQ&usqp=CAE'} title={'Browen Shirt Mens'} oprice={'899'} nprice={'1499'}/>
          <ProductCard imgURL={'https://img0.junaroad.com/uiproducts/20215266/zoom_0-1693245033.jpg'} title={'Short Kurti '} oprice={'299'} nprice={'999'}/>
          <ProductCard imgURL={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmws-4SHKm8OJpprI2QVOtw3heh2g_EW65uypPNiFDuVw_2H1Um1j71GGoc_LoCGZMgUiUcu9iDZeXARorbu1xO4ulL_2mL-n6YA8SXVvC&usqp=CAE'} title={'Jacket For Womens'} oprice={'799'} nprice={'2999'}/>
          <ProductCard imgURL={'https://getketchadmin.getketch.com/product/8905404111616/660/5.jpg'} title={'Levis Jeans'} oprice={'1399'} nprice={'3999'}/>
          <ProductCard imgURL={'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/15d2efc2-a009-4102-9548-ce5f3c70c8d0/air-max-solo-shoes-D0Mfh7.png'} title={'Nike Shoes'} oprice={'2999'} nprice={'5999'}/>
          <ProductCard imgURL={'https://www.sairasboutique.net/cdn/shop/products/GrayDesignerEmbroideredNetWeddingKurtiStyleLehenga-Saira_sBoutique.jpg?v=1605157788'} title={'brown lehenga'} oprice={'1299'} nprice={'3999'}/>
          <ProductCard imgURL={'https://images.cbazaar.com/images/violet-blended-cotton-chikankari-knee-length-kurti-kruhoa020-u.jpg'} title={'Purple Kurti'} oprice={'499'} nprice={'2499'}/>
          <ProductCard imgURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBymUclXMtJJ9lztcKdV0ifvMlX4IllVoXA&s'} title={'Red Kurti'} oprice={'399'} nprice={'1999'}/>
          <ProductCard imgURL={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNnSSHMMFGoA-xZ2cuipNh5l3eh_xp43dSicp2-aq6moXh0iFf-u0rYxhmUAGKaLXre5jz07Y3gu4uh1Vyb6ZT6umW3tLbOsoU185QvdvauPvM144HyJywzQ&usqp=CAE'} title={'Browen Shirt Mens'} oprice={'899'} nprice={'1499'}/>
        </div>

        <div className="textColor  flex justify-center cursor-pointer">
          <p className='backgroundColor text-[12px] lg:text-[15px] text-white p-3 rounded-md mt-3 px-5 font-bold mb-8'>
          View More Products
          </p>
          
        </div>

      </div>
    </div>
  );
};

export default HomePage;
