// src/components/ProductDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./api"; // Assuming you already have this
import { addToCart } from "./api"; // Cart API function

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(false); // To show success message

  // Fetch product details when component mounts
  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  // Function to handle "Add to Cart"
  const handleAddToCart = async () => {
    try {
      await addToCart(product); // Add product to the cart via API
      setCartSuccess(true); // Show success message
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-detail flex justify-center items-center min-h-screen">
      <div className="w-4/5 lg:w-3/5 p-6 bg-gray-100 rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 my-4">{product.description}</p>
        <p className="text-xl font-semibold">Category: {product.category}</p>
        <p className="text-2xl font-bold mt-4">${product.price}</p>

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
        >
          Add to Cart
        </button>

        {/* Display success message when product is added to cart */}
        {cartSuccess && (
          <p className="text-green-600 mt-4">
            Product added to cart successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
