import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242F66] text-white mt-10">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Information</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <p>Connect with us on social media:</p>
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-4 text-center">
        <p>&copy; 2024 Your E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
