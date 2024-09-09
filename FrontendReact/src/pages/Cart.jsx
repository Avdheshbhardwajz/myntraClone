import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem, deleteItem } from "../store/wishlistSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  // Handle redirection to the Checkout page
  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };

  if (loading) {
    return <p className="text-lg text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-lg text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-black text-white min-h-screen py-10 px-5">
      <h2 className="text-3xl font-semibold mb-6 text-center font-poppins">
        Shopping Cart
      </h2>
      {items.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-400">${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Proceed to Checkout Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
