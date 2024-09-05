import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios"; // Assuming you are using axios for API requests

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`); // Replace with your API endpoint
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-xl text-gray-600">Product not found.</p>
    );
  }

  const {
    name,
    description,
    price,
    category,
    brand,
    stock,
    ratings,
    numOfReviews,
    images,
  } = product;

  // Calculate average rating stars
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      color={index < ratings ? "yellow" : "gray"}
      className="text-sm"
    />
  ));

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <img
            src={images[0]?.url || "https://via.placeholder.com/500"}
            alt={name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          <div className="flex space-x-2 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`${name} ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">{name}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-500 mb-2">Category: {category}</p>
          <p className="text-gray-500 mb-2">Brand: {brand}</p>
          <p className="text-gray-500 mb-4">
            Stock: {stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">{ratingStars}</div>
            <span className="text-gray-500 ml-2">({numOfReviews} reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={stock === 0}
          >
            {stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
