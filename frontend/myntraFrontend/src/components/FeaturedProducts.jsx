import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import the axios instance

const FeaturedProducts = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from the API
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/featured");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (!Array.isArray(products)) {
    console.error("Expected products to be an array");
    return null; // Or display an appropriate message
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col"
            >
              <img
                src={
                  product.images[0]?.url || "https://via.placeholder.com/300"
                }
                alt={product.name}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No featured products available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
