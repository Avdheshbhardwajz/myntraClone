import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import {
  fetchCartItems,
  removeItemFromCart,
  updateItemQuantity,
} from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    items: cartItems,
    loading,
    error,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  console.log("Cart Items:", cartItems); // Log cartItems to debug

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item._id));
  };

  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateItemQuantity(item, newQuantity));
  };

  // Check if cartItems is an array before using reduce
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onRemoveFromCart={handleRemoveFromCart}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <p className="text-lg mb-4">Total: ${totalPrice.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white py-3 px-6 rounded-md block text-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-xl">
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Continue shopping
          </Link>
          .
        </p>
      )}
    </div>
  );
};

export default Cart;
