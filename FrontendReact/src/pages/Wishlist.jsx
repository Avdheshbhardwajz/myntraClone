import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem, deleteItem } from "../store/wishlistSlice"; // Import getItem
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Wishlist = () => {
  const {
    items: wishlistItems,
    loading,
    error,
  } = useSelector((state) => state.wishlist); // Destructure state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem()); // Fetch wishlist items on mount
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(deleteItem(id)); // Dispatch deleteItem action
  };

  if (loading) {
    return <p className="text-lg text-center">Loading...</p>; // Show loading while fetching
  }

  if (error) {
    return <p className="text-lg text-center text-red-500">Error: {error}</p>; // Show error message if any
  }

  return (
    <div className="bg-black min-h-screen text-white font-poppins">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

        {wishlistItems && wishlistItems.length === 0 ? (
          <p className="text-center text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </Link>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold truncate">
                    {item.title}
                  </h2>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>
                <p className="text-gray-400 mb-4">${item.price}</p>
                <Link to={`/product/${item.id}`}>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
