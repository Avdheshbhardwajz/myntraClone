import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem as addCartItem } from "../store/cartSlice"; // Import addItem for cart
import { addItem as addWishlistItem } from "../store/wishlistSlice"; // Import addItem for wishlist
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon for wishlist

const Productcard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartSuccess, setCartSuccess] = useState(false); // Track if item added to cart
  const [wishlistSuccess, setWishlistSuccess] = useState(false); // Track if item added to wishlist

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Function to truncate the description to 20 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  // Function to handle Add to Cart button click
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click from triggering
    dispatch(addCartItem(product)); // Dispatch add to cart action
    setCartSuccess(true); // Show cart success message
    setTimeout(() => setCartSuccess(false), 3000); // Hide after 3 seconds
  };

  // Function to handle Add to Wishlist button click
  const handleAddToWishlist = (e) => {
    e.stopPropagation(); // Prevent card click from triggering
    dispatch(addWishlistItem(product)); // Dispatch add to wishlist action
    setWishlistSuccess(true); // Show wishlist success message
    setTimeout(() => setWishlistSuccess(false), 3000); // Hide after 3 seconds
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 font-poppins"
      onClick={handleCardClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.category}</p>
        <p className="text-gray-900 mb-4">${product.price}</p>
        <p className="text-gray-600 mb-4">
          {truncateDescription(product.description, 20)}
        </p>
        <div className="flex justify-between items-center">
          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>

          {/* Add to Wishlist button with heart icon */}
          <button
            onClick={handleAddToWishlist}
            className="text-red-500 text-2xl hover:text-red-700"
          >
            <AiOutlineHeart />
          </button>
        </div>

        {/* Show success messages */}
        {cartSuccess && (
          <p className="text-green-600 mt-2">Item added to cart!</p>
        )}
        {wishlistSuccess && (
          <p className="text-green-600 mt-2">Item added to wishlist!</p>
        )}
      </div>
    </div>
  );
};

Productcard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Productcard;
