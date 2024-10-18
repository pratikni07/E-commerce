import React, { useEffect, useState } from "react";
import CategoryCard from "@/components/Cards/CategoryCard";
import Hero from "@/components/Home/Hero";
import Slider from "./Slider";
import ProductCard from "@/components/Cards/ProductCard";
import { Button } from "@nextui-org/button";
import AllProducts from "@/components/Products/AllProducts";
import CategoryView from "@/components/Category/CategoryView";
import salebanner from "@/assets/salebanner.png";
import homemodal from "@/assets/homemodal.png";
import banner from "@/assets/banner.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { getAllSales } from "@/services/operations/designAPI";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("sm");
  const [modalPlacement, setModalPlacement] = useState("center");
  const [sales, getSales] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  const getAllSale = async () => {
    try {
      const response = await getAllSales();
      getSales(response.data[0]);
    } catch (error) {
      console.error("Error fetching sales:", error);
    } finally {
      setLoading(false); // Hide splash screen after data fetching
    }
  };

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  useEffect(() => {
    handleOpen();
    getAllSale();
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onOpenChange]);

  const getSalesBannerLink = () => {
    if (!sales) return "/products";
    if (sales.isApplicableForAllProducts) {
      return "/products";
    }
    if (
      sales.category &&
      sales.subcategories &&
      sales.subcategories.length > 0
    ) {
      const subcategoriesQuery = sales.subcategories
        .map((sub) => sub._id)
        .join(",");
      return `/products?category=${sales.category[0]._id}&subcategory=${subcategoriesQuery}`;
    }
    if (
      !sales.category &&
      sales.subcategories &&
      sales.subcategories.length > 0
    ) {
      const subcategoriesQuery = sales.subcategories
        .map((sub) => sub._id)
        .join(",");
      return `/products?subcategory=${subcategoriesQuery}`;
    }
    if (
      sales.category &&
      (!sales.subcategories || sales.subcategories.length === 0)
    ) {
      return `/products?category=${sales.category._id}`;
    }
    return "/products";
  };

  const dailyActive = () => {};
  useEffect(() => dailyActive(), []);

  return (
    <div className="w-[90%] m-auto">
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center font-bold text-[#8E3E63] justify-center z-50">
          <h2 className="text-lg">MegaMart</h2> {/* Simple loading text */}
        </div>
      )}

      <Hero />

      <div className="lg:hidden md:hidden mt-2">
        {sales && (
          <Link to={getSalesBannerLink()}>
            <img src={sales.mainImage} alt="Sales Banner" />
          </Link>
        )}
      </div>

      <div className="flex flex-col ">
        <CategoryView title={"MEN"} categoryId={"664a4a742b113ef1eb4084d0"} />
        <CategoryView title={"WOMEN"} categoryId={"664a4b202b113ef1eb4084d3"} />
      </div>

      <div className="lg:hidden md:hidden mt-4">
        <img src={banner} />
      </div>

      <div className="mt-5">
        {/* <div className="textColor font-bold text-[16px] lg:text-[25px] flex justify-center cursor-pointer">
          <p>TOP SELLING PRODUCTS</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4 rounded-md ">

        </div> */}

        <AllProducts />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={modalPlacement}
      >
        <ModalContent>
          <img src={homemodal} className="sm:w-380 sm:h-600" alt="Home Modal" />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HomePage;
