import React, { useState, useEffect } from "react";
import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/services/operations/productAPI";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import SimilarProducts from "@/components/Products/SimilarProducts";
import Testimonials from "@/components/Testimonials";

import banner from "@/assets/banner.png";
import {
  addToWishlist,
  checkInWishlist,
} from "@/services/operations/wishlistAPI";
import { Spinner } from "@nextui-org/spinner";

const ProductViewPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inStock, setInStock] = useState(true);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const userId = user._id;

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await getProductById(id);
      setProduct(res);
      setInStock(res.stock > 0);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
    setLoading(false);
  };

  const checkProductInWishlist = async () => {
    setLoading(true);
    try {
      const response = await checkInWishlist(id, userId); // Call your function correctly
      // Handle response here if needed
    } catch (error) {
      console.error("Error checking wishlist product:", error);
      // Handle error state here if needed
    }
    setLoading(false);
  };

  const addProductToWishlist = async () => {
    setLoading(true);
    try {
      const response = await addToWishlist(id, userId); // Call your function correctly
      // Handle response here if needed
    } catch (error) {
      console.error("Error checking wishlist product:", error);
      // Handle error state here if needed
    }
    setLoading(false);
  };

  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const handleAddToCart = () => {
    if (cart.find((item) => item._id === product._id)) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product._id));
  };

  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Spinner color="#8E3E63" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 lg:py-8">
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>{product?.category?.name}</BreadcrumbItem>
        <BreadcrumbItem>{product?.subcategory?.name}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <div className="md:w-4/5 ">
          <div className="lg:hidden">
            <Carousel>
              <CarouselContent>
                {product?.images?.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt="Product Image"
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            {product?.images && product.images.length > 0 ? (
              <>
                <div className="w-full flex flex-wrap gap-2">
                  {product.images.slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className="w-[48%] h-auto"
                    />
                  ))}
                </div>
              </>
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
          {product?.reviews && product?.reviews > 10 && (
            <div className="flex gap-2 mb-4">
              <span className="text-lg font-bold flex align-middle items-center gap-2 ">
                4.5 <Star size={20} color="#FFC100" />
              </span>
              <span className="text-sm flex items-center text-gray-500">
                Based on 100 reviews
              </span>
            </div>
          )}

          <p className="text-lg mb-4">
            {/* {product?.description || defaultContent} */}
            <div
              dangerouslySetInnerHTML={{
                __html: product?.shortdescription || defaultContent,
              }}
            />
          </p>
          <p className="text-lg font-bold mb-1">Price: ${product?.newPrice}</p>
          {product?.oldPrice && product?.oldPrice > product?.newPrice && (
            <p className="text-lg mb-2">
              <span className="line-through text-gray-500">
                ${product?.oldPrice}
              </span>
              <span className="text-red-500 font-bold ml-2">
                {calculateDiscount(product?.oldPrice, product?.newPrice)}% OFF
              </span>
            </p>
          )}
          <div className="text-white flex gap-2">
            <Button
              className="bg-[#8E3E63] text-white font-bold w-[40%]"
              onClick={() => {
                addProductToWishlist();
              }}
            >
              {" "}
              <Heart className="mr-2" /> WHISHLIST
            </Button>
            <Button
              className={`bg-[#8E3E63] text-white font-bold w-[60%] ${
                !inStock && "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              <ShoppingBag className="mr-2" />
              {inStock
                ? cart.find((item) => item._id === product._id)
                  ? "GO TO CART"
                  : "ADD TO CART"
                : "OUT OF STOCK"}
            </Button>
          </div>
          {cart.find((item) => item._id === product._id) && (
            <div className="mt-4">
              <Button
                className="bg-red-500 text-white font-bold w-full"
                onClick={handleRemoveFromCart}
              >
                REMOVE FROM CART
              </Button>
            </div>
          )}
          <div className="mt-6">
            <img src={banner} />
          </div>
          <div className="mt-8">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Product Description"
                subtitle="Manufacture, Care and Fit"
                title="Product Description"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description || defaultContent,
                  }}
                />
              </AccordionItem>
              <AccordionItem
                aria-label="Free Shipping"
                subtitle="We Offer free shipping across India"
                title="Free Shipping"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                aria-label="7 Days Returns & Exchange"
                subtitle="Know about return & exchange policy"
                title="7 Days Returns & Exchange"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-4"></div>
      </div>
      {product?.category && product?.subcategory && (
        <SimilarProducts
          category={product.category}
          subcategory={product.subcategory}
          productId={product._id}
        />
      )}
      {
        // product?.reviews && (product?.reviews >0)&&
        <Testimonials />
      }
    </div>
  );
};

export default ProductViewPage;
