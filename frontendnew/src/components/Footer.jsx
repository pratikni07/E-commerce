import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-4">
            <h2 className="text-2xl font-bold mb-2">House Of Unique</h2>
            <p>Your one-stop shop for all things fashion.</p>
            <p className="mt-2 text-sm">&copy; 2024 House Of Unique. All rights reserved.</p>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Customer Service</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Returns</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Shipping Info</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Information</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-400">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
            <p className="mb-2">Get the latest updates on new products and upcoming sales</p>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 mb-2 rounded text-gray-800" />
              <button className="w-full bg-[#8E3E63] text-white py-2 rounded hover:bg-[#6d304f]">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div>
            <p className="text-sm">Payment Methods</p>
            <div className="flex space-x-4 mt-2">
              <img src="path/to/visa-icon.png" alt="Visa" className="w-8 h-8" />
              <img src="path/to/mastercard-icon.png" alt="Mastercard" className="w-8 h-8" />
              <img src="path/to/paypal-icon.png" alt="Paypal" className="w-8 h-8" />
              <img src="path/to/amex-icon.png" alt="American Express" className="w-8 h-8" />
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
