import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-cyan-800">
      <img src="./land.jpg" alt="Background Image" className="w-full h-[650px] object-cover object-center" /> {/* Added alt text and height */}
      <nav className="p-5 bg-transparent shadow md:flex md:items-center md:justify-between absolute top-0 w-full hover:bg-cyan-400 text-white duration-200">
        <div className="flex items-center">
          <span className="text-2xl font-Poppins">
            <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148631711.jpg" alt="Logo" className="h-10 inline cursor-pointer mr-4" />
            Arman
          </span>
        </div>

        <ul className="md:flex md:items-center">
          <li className="text-white hover:text-gray-200 duration-400 cursor-pointer mx-4 hover:border-b-2">HOME</li>
          <li className="text-white hover:text-gray-200 duration-400 cursor-pointer mx-4 hover:border-b-2">ABOUT</li>
          <li className="text-white hover:text-gray-200 duration-400 cursor-pointer mx-4 hover:border-b-2">CONTACTS</li>
          <li className="text-white hover:text-gray-200 duration-400 cursor-pointer mx-4 hover:border-b-2">BLOGS</li>
        </ul>

        <button className="flex items-center bg-cyan-400 text-white px-6 py-2 mx-4 font-Poppins hover:bg-orange-400 duration-500 rounded">
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Navbar;