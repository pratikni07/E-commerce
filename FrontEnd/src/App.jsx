import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavbarTopAds from "./components/Ads/NavbarTopAds";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
import ProductPage from "./Pages/Product/ProductPage";
import NotFound from "./Pages/Error/NotFound";
import Seller from "./Pages/Users/Seller";
import UIPage from "./Pages/SellerPage/UIPage/UIPage";
import Category from "./Pages/SellerPage/Category/Category";
import AddProducts from "./Pages/SellerPage/Products/AddProducts";
import ShowProducts from "./Pages/SellerPage/Products/ShowProducts";
import SettingPage from "./Pages/SellerPage/Settings/SettingPage";

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {/* {pathname !== "/sellerdashboard" && <NavbarTopAds />} */}
      {/* {pathname !== "/sellerdashboard" && <Navbar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        <Route path="/seller/dashboard" element={<Seller />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/seller/uipage" element={<UIPage/>} />

        <Route path="/seller/category" element={<Category/>} />
        <Route path="/seller/showproducts" element={<ShowProducts/>} />
        <Route path="/seller/addproduct" element={<AddProducts/>} />
        <Route path="/seller/setting" element={<SettingPage/>} />

      </Routes>
      {/* {pathname !== "/seller/uipage" && <Footer />} */}
      {/* {pathname !== "/sellerdashboard" && <Footer />} */}
      
    </>
  );
}

export default App;
