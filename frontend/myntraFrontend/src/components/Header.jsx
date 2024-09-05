// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Myntra
        </Link>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full p-2 rounded-md"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <FaUser className="text-xl" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
