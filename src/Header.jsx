import React from "react";
import { ShoppingCart, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-black">
            SRI KRISHNA
          </a>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-800 hover:text-blue-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/deepavali-offer"
                className="text-gray-800 hover:text-blue-500 transition-colors"
              >
                Deepavali Offer
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-800 hover:text-blue-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-gray-800 hover:text-blue-500 transition-colors"
              >
                Products
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center px-3 py-2 border border-gray-300 rounded text-sm text-gray-800 hover:bg-gray-100 transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              Quick Enquiry
            </button>
            <button className="flex items-center px-3 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Shop Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
