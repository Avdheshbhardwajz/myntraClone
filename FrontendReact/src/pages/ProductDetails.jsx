import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./api"; // Ensure correct path
import { useDispatch } from "react-redux";
import { addItem as addToCart } from "../store/cartSlice"; // Cart API function
import { addItem as addToWishlist } from "../store/wishlistSlice"; // Wishlist API function
import { FaHeart } from "react-icons/fa"; // Import heart icon for wishlist

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
    dispatch(addToCart(product._id)); // Dispatch addItem action for cart
    setCartSuccess(true); // Show success message
    setTimeout(() => setCartSuccess(false), 3000); // Hide success message after 3 seconds
  };

  // Function to handle "Add to Wishlist"
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product._id)); // Dispatch addItem action for wishlist
    setWishlistSuccess(true); // Show success message
    setTimeout(() => setWishlistSuccess(false), 3000); // Hide success message after 3 seconds
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-detail flex justify-center items-center min-h-screen font-poppins">
      <div className="w-full lg:w-4/5 p-6 bg-white shadow-lg rounded-lg">
        {/* Display images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {product.images.split(" | ").map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title}-${index}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Product Title and Info */}
        <h1 className="text-3xl lg:text-4xl font-bold mt-6 text-gray-800">
          {product.title}
        </h1>
        <p className="text-gray-700 text-lg my-4">{product.product_details}</p>

        {/* Product Specifications */}
        <div className="text-lg space-y-2">
          <p>
            <span className="font-semibold">Category: </span>
            {product.product_type}
          </p>
          <p>
            <span className="font-semibold">Ideal for: </span>
            {product.ideal_for}
          </p>
          <p>
            <span className="font-semibold">Material: </span>
            {product.dominant_material}
          </p>
          <p>
            <span className="font-semibold">Color: </span>
            {product.actual_color}
          </p>
          <p>
            <span className="font-semibold">Size: </span>
            {product.size}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-6">
          <p className="text-2xl font-bold text-blue-600">
            ₹{product.variant_price}
          </p>
          {product.variant_compare_at_price && (
            <p className="text-gray-500 text-lg line-through mt-1">
              ₹{product.variant_compare_at_price}
            </p>
          )}
        </div>

        {/* Add to Cart and Wishlist buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>

          <button
            onClick={handleAddToWishlist}
            className="bg-pink-600 text-white py-2 px-6 rounded-lg flex items-center space-x-2 hover:bg-pink-700 transition duration-300"
          >
            <FaHeart />
            <span>Add to Wishlist</span>
          </button>
        </div>

        {/* Success messages */}
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

        {/* Link to external product */}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-8 text-blue-600 underline hover:text-blue-800 transition duration-300"
        >
          View Product on Myntra
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
