import React from 'react';
import { Breadcrumbs, BreadcrumbItem, Button } from '@nextui-org/react';
import { Heart , ShoppingBag , Star} from 'lucide-react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import ProductCard from '@/components/Cards/ProductCard';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

  
const ProductViewPage = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <Breadcrumbs className='mb-4'>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Mens</BreadcrumbItem>
        <BreadcrumbItem>Shirt</BreadcrumbItem>
      </Breadcrumbs>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-4/5 '>
            <div className='lg:hidden'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img
                    src='https://nobero.com/cdn/shop/files/ApricotCrush.jpg?v=1711977473'
                    alt='Product Image'
                    className='w-full h-auto'
                /></CarouselItem>
                        <CarouselItem><img
                    src='https://nobero.com/cdn/shop/files/Pineapple_6ce64022-2675-4074-b89a-eb85d41360ca.jpg?v=1712044045'
                    alt='Product Image'
                    className='w-full h-auto'
                /></CarouselItem>
                        <CarouselItem><img
                    src='https://nobero.com/cdn/shop/files/Pineapple_6ce64022-2675-4074-b89a-eb85d41360ca.jpg?v=1712044045'
                    alt='Product Image'
                    className='w-full h-auto'
                /></CarouselItem>
                    </CarouselContent>

                </Carousel>

            </div>
            <div className='hidden lg:flex flex-col gap-4' >
            <div className='w-[50%] flex gap-2'>

                <img
                    src='https://nobero.com/cdn/shop/files/ApricotCrush.jpg?v=1711977473'
                    alt='Product Image'
                    className='w-full h-auto'
                />
                <img
                    src='https://nobero.com/cdn/shop/files/Pineapple_6ce64022-2675-4074-b89a-eb85d41360ca.jpg?v=1712044045'
                    alt='Product Image'
                    className='w-full h-auto'
                />
            </div>
            <div className='w-[50%] flex gap-2'>
                <img
                    src='https://nobero.com/cdn/shop/files/Mauve_0313dc87-5d53-4d31-87a6-3ae25e643a0f.jpg?v=1712044045'
                    alt='Product Image'
                    className='w-full h-auto'
                />
                <img
                    src='https://nobero.com/cdn/shop/files/Pineapple_6ce64022-2675-4074-b89a-eb85d41360ca.jpg?v=1712044045'
                    alt='Product Image'
                    className='w-full h-auto'
                />
            </div>
            </div>
        </div>
        <div className='md:w-3/5'>
          <h1 className='text-3xl font-bold mb-4'>Product Title</h1>
          {/* rating  */}
          <div className='flex gap-2 mb-4'>
            <span className='text-lg font-bold flex align-middle items-center gap-2 '>4.5 <Star size={20} color='#FFC100' /> </span>
            <span className='text-sm flex items-center text-gray-500'>Based on 100 reviews</span>
          </div>
          <p className='text-lg mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
            vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec sed odio dui.
          </p>
          <p className='text-lg font-bold mb-4'>Price: $100</p>

          <div className='text-white flex gap-2'>
            <Button className='bg-[#8E3E63] text-white font-bold w-[40%]'> <Heart className='mr-2' /> WHISHLIST</Button>
            <Button className='bg-[#8E3E63]  text-white font-bold w-[60%] ' > <ShoppingBag  className='mr-2'/> ADD TO CART </Button>
          </div>

          <div className='mt-8'>
            <Accordion>
                <AccordionItem key="1" aria-label="Product Description" subtitle="Manufacture, Care and Fit" title="Product Description">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    aria-label="Free Shipping"
                    subtitle='We Offer free shipping across India'
                    title="Free Shipping"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem  aria-label="7 Days Returns & Exchange" subtitle="Know about return & exchange policy" title="7 Days Returns & Exchange">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div>
        {/* add review  */}
        <div className='flex justify-center mb-4'>
        </div>
      </div>
      <div className="mt-8 ">
        <div className="textColor font-bold text-[16px] lg:text-[25px] flex  cursor-pointer">
          <p>SIMILAR PRODUCTS</p>
        </div>
        {/* for small screen display 6 products for bigger screen display 8 product and for tab show 6  */}
        <div className="flex flex-wrap justify-between gap-4 mt-4 py-4 rounded-md ">  
        {/* for small screen disply only 6  */}
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

export default ProductViewPage;
