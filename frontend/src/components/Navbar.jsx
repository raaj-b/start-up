import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
            E<span className="text-blue-600">Commerce</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <button className="hover:text-blue-600 transition text-xl">
            <MdOutlineFavoriteBorder />
          </button>

          <button className="hover:text-blue-600 transition text-xl relative">
            <BiCart />
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              2
            </span>
          </button>

          <button className="hover:text-blue-600 transition text-xl">
            <CiUser />
          </button>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </header>
  );
}

export default Navbar;
