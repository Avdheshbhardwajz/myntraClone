// src/components/ProductCard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { addToCart } from "../pages/api"; // Import addToCart function

const Productcard = ({ product }) => {
  const navigate = useNavigate();
  const [cartSuccess, setCartSuccess] = useState(false); // Track if item added successfully

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
  const handleAddToCart = async () => {
    try {
      await addToCart(product); // Add product to the cart via API
      setCartSuccess(true); // Set success message or feedback
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
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
        <div className="flex justify-between">
          {/* Add to Cart button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from triggering
              handleAddToCart(); // Call add to cart function
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={(e) => e.stopPropagation()} // Prevent card click
          >
            Buy Now
          </button>
        </div>
        {/* Show success message */}
        {cartSuccess && (
          <p className="text-green-600 mt-2">Item added to cart!</p>
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
