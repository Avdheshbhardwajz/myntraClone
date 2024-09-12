import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem, deleteItem } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items || []); // Ensure items isn't undefined
  console.log(items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

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
                key={item.productId.id}
                className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium">
                    {item.productId.title}
                  </h3>
                  <p className="text-gray-400">
                    ₹{item.productId.variant_price}
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(item.productId.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

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
