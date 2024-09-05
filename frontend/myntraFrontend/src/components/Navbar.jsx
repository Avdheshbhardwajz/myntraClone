import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import axiosInstance from "../utils/axiosInstance"; // Your axios instance for API requests

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Fetch cart data and check login status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      fetchCartItems(); // Fetch cart items if the user is logged in
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Function to fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      const response = await axiosInstance.get("/cart");
      setCartItemCount(response.data.cartItems.length); // Assuming `cartItems` is an array in the response
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      navigate(`/products/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MyntraClone
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-grow mx-4 max-w-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-l-lg border-none focus:outline-none text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r-lg"
          >
            <FaSearch />
          </button>
        </form>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/cart" className="hover:underline">
                Cart
              </Link>
              <Link to="/profile" className="hover:underline">
                Profile
              </Link>
            </>
          )}
        </div>

        {/* User and Cart Icons */}
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              {/* Cart icon with item count */}
              <Link
                to="/cart"
                className="relative text-lg hover:text-yellow-500"
              >
                <FaShoppingCart />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Logout button */}
              <button onClick={handleLogout} className="hover:text-yellow-500">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Show login and sign-up links if not logged in */}
              <Link to="/signup" className="hover:text-yellow-500">
                Sign Up
              </Link>
              <Link to="/login" className="hover:text-yellow-500">
                Sign In
              </Link>
              <Link to="/cart" className="text-lg hover:text-yellow-500">
                <FaShoppingCart />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
