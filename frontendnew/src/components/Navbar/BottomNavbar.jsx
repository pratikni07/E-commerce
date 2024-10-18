import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, User, Heart, Grip } from "lucide-react";

const BottomNavbar = () => {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex flex-col items-center py-2 px-3 rounded-lg ${
          isActive ? "bg-gray-300" : ""
        }`}
      >
        <Icon
          className={`h-6 w-6 ${isActive ? "text-[#8E3E63]" : "text-gray-500"}`}
        />
        <span
          className={`text-xs mt-1 ${
            isActive ? "text-[#8E3E63] font-medium" : "text-gray-500"
          }`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="fixed bottom-0 lg:hidden md:hidden left-0 right-0 bg-white border-t rounded-t-md border-gray-200 z-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around py-2">
          <NavItem to="/" icon={Home} label="Home" />
          <NavItem to="/products" icon={ShoppingBag} label="Shop" />
          <NavItem to="/categories" icon={Grip} label="Categories" />
          <NavItem to="/wishlist" icon={Heart} label="Wishlist" />
          <NavItem to="/profile" icon={User} label="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
