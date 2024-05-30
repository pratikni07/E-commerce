import { useState } from 'react'
import './App.css'
import TopBar from './components/Offer/TopBar'
import Navbar1 from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import ProductViewPage from './Pages/ProductViewPage/ProductViewPage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer'
import CheckoutPage from './Pages/CheckoutPage'
import OrderPage from './Pages/OrderPage'
import { Routes, Route, useLocation } from "react-router-dom";
import SellerNavbar from './Pages/SellerPage/SellerNavbar'
import UIPage from './Pages/SellerPage/UIPage/UIPage'
import Category from "./Pages/SellerPage/Category/Category";
import AddProducts from "./Pages/SellerPage/Products/AddProducts";
import ShowProducts from "./Pages/SellerPage/Products/ShowProducts";
import SettingPage from "./Pages/SellerPage/Settings/SettingPage";
function App() {
  const location = useLocation();
  const renderNavbar =
    location.pathname !==  "/seller/dashboard" &&
    location.pathname !== "/seller/uipage" &&
    location.pathname !== "/seller/category" &&
    location.pathname !== "/seller/showproducts" &&
    location.pathname !== "/seller/addproduct" &&
    location.pathname !== "/seller/setting";
  return (
    <>
      {renderNavbar && <TopBar />}
     {renderNavbar && <Navbar1 />}
      {/* <HomePage/> */}
      {/* <ProductViewPage/> */}
      {/* <CheckoutPage/> */}
      {/* <OrderPage/> */}

      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        <Route path="/seller/dashboard" element={<SellerNavbar />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/seller/uipage" element={<UIPage/>} />
        <Route path="/seller/category" element={<Category/>} />
        <Route path="/seller/showproducts" element={<ShowProducts/>} />
        <Route path="/seller/addproduct" element={<AddProducts/>} />
        <Route path="/seller/setting" element={<SettingPage/>} /> 

      </Routes>
      {renderNavbar && <Footer />}
    </>
  )
}

export default App
