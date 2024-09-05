import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlistItems, setWishlistItems, setCartItems }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRemoveFromWishlist = async (itemId) => {
    setLoading(true);
    try {
      await axios.delete(`/api/wishlist/${itemId}`);
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      setError("Failed to remove item from wishlist");
    } finally {
      setLoading(false);
    }
  };

  const handleMoveToCart = async (item) => {
    setLoading(true);
    try {
      await axios.post(`/api/cart`, { itemId: item._id, quantity: 1 });
      setCartItems((prevItems) => [...prevItems, item]);
      await handleRemoveFromWishlist(item._id);
    } catch (error) {
      setError("Failed to move item to cart");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item._id} // Assuming _id is used as the unique identifier
              className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.images[0]?.url || "https://via.placeholder.com/300"} // Adjust as per image structure
                  alt={item.name}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-medium">{item.name}</h2>
              </Link>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item._id)}
                  className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
