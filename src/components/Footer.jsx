import React from 'react';
import { BsTwitterX, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-300">We decided to make your journey joyful and safe.</p>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul className="flex justify-center md:justify-end gap-6">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-300 transition duration-300">
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-500 hover:text-pink-300 transition duration-300">
                  <ImInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">
                  <BsTwitterX size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-red-500 hover:text-red-300 transition duration-300">
                  <BsYoutube size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;