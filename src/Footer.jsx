import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 transition-all duration-300 ease-in-out hover:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">
              Diwali Celebrations
            </h3>
            <p className="mb-4">
              Join us in celebrating the festival of lights with joy and
              prosperity.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/4DC7C4F4kg8FG6Hn/"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/sri_kannan_pattasu_ulagam?igsh=MW5sdHN4bDVvemV6ZA=="
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-yellow-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Diwali Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Diya Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Rangoli Designs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 transition-colors duration-300"
                >
                  Gift Ideas
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right transform transition-all duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold mb-4 text-yellow-500">
              Newsletter
            </h4>
            <p className="mb-4">
              Subscribe to get updates on our Diwali offers and events.
            </p>
            <form className="flex flex-col md:flex-row justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 mb-2 md:mb-0 md:mr-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-yellow-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Diwali Celebrations. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
