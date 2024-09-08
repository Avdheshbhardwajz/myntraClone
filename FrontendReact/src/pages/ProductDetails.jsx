import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./api"; // Ensure correct path
import { useDispatch } from "react-redux";
import { addItem as addToCart } from "../store/cartSlice"; // Cart API function
import { addItem as addToWishlist } from "../store/wishlistSlice"; // Wishlist API function
import { FaHeart } from "react-icons/fa"; // Import an icon (like heart)

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(false); // To show success message for cart
  const [wishlistSuccess, setWishlistSuccess] = useState(false); // To show success message for wishlist

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
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addItem action for cart
    setCartSuccess(true); // Show success message
    setTimeout(() => setCartSuccess(false), 3000); // Hide success message after 3 seconds
  };

  // Function to handle "Add to Wishlist"
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product)); // Dispatch addItem action for wishlist
    setWishlistSuccess(true); // Show success message
    setTimeout(() => setWishlistSuccess(false), 3000); // Hide success message after 3 seconds
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
        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
          >
            Add to Cart
          </button>

          {/* Add to Wishlist button with Heart Icon */}
          <button
            onClick={handleAddToWishlist}
            className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-800 flex items-center space-x-2"
          >
            <FaHeart className="text-white" />
            <span>Add to Wishlist</span>
          </button>
        </div>

        {/* Display success messages */}
        {cartSuccess && (
          <p className="text-green-600 mt-4">
            Product added to cart successfully!
          </p>
        )}
        {wishlistSuccess && (
          <p className="text-pink-600 mt-4">
            Product added to wishlist successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
