import { useState } from "react";
import "./App.css";
import TopBar from "./components/Offer/TopBar";
import Navbar1 from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import ProductViewPage from "./Pages/ProductViewPage/ProductViewPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderPage from "./Pages/OrderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import SellerNavbar from "./Pages/SellerPage/SellerNavbar";
import UIPage from "./Pages/SellerPage/UIPage/UIPage";
import Category from "./Pages/SellerPage/Category/Category";
import AddProducts from "./Pages/SellerPage/Products/AddProducts";
import ShowProducts from "./Pages/SellerPage/Products/ShowProducts";
import SettingPage from "./Pages/SellerPage/Settings/SettingPage";
import WishListPage from "./Pages/WishListPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import UserAddress from "./Pages/ProfilePage/UserAddress";
import Products from "./Pages/ProductPage/Products";
import Manageusers from "./Pages/SellerPage/Users/Manageusers";
import UISalePage from "./Pages/SellerPage/UIPage/UISalePage";
import HelpIcon from "./components/HelpIcon";
import BottomNavbar from "./components/Navbar/BottomNavbar"; // Import the new BottomNavbar component
import CategoriesPage from "./Pages/CategoriesPage";

function App() {
  const location = useLocation();
  const isSellerPage = location.pathname.startsWith("/seller");
  const renderMainNavbar = !isSellerPage;

  return (
    <>
      {renderMainNavbar && <TopBar />}
      {renderMainNavbar && <Navbar1 />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/useraddress" element={<UserAddress />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/seller/dashboard" element={<SellerNavbar />} />
        <Route path="/seller/uipage" element={<UIPage />} />
        <Route path="/seller/category" element={<Category />} />
        <Route path="/seller/showproducts" element={<ShowProducts />} />
        <Route path="/seller/offers" element={<UISalePage />} />
        <Route path="/seller/addproduct" element={<AddProducts />} />
        <Route path="/seller/setting" element={<SettingPage />} />
        <Route path="/seller/users" element={<Manageusers />} />
      </Routes>
      {renderMainNavbar && <Footer />}
      {/* <HelpIcon /> */}
      {renderMainNavbar && <BottomNavbar />}{" "}
      {/* Add the BottomNavbar component here */}
    </>
  );
}

export default App;
