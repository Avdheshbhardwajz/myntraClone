import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product = {}, onAddToCart }) => {
  const {
    name = "Unnamed Product",
    description = "No description available.",
    price = 0.0,
    category = "Uncategorized",
    brand = "No brand",
    stock = 0,
    ratings = 0,
    numOfReviews = 0,
    images = [],
  } = product;

  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      color={index < ratings ? "#FFD700" : "#E0E0E0"}
      className="text-sm"
    />
  ));

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={images[0]?.url || "https://via.placeholder.com/300"}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-blue-600">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center">
            {ratingStars}
            <span className="text-gray-500 text-sm ml-2">
              ({numOfReviews} reviews)
            </span>
          </div>
        </div>
        <p className="text-gray-500 mb-1">
          Category:{" "}
          <span className="font-medium text-gray-700">{category}</span>
        </p>
        <p className="text-gray-500 mb-1">
          Brand: <span className="font-medium text-gray-700">{brand}</span>
        </p>
        <p className="text-gray-500 mb-4">
          Stock:{" "}
          <span
            className={`font-medium ${
              stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </span>
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
