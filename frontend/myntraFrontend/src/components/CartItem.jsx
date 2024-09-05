import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, onRemoveFromCart, onQuantityChange }) => {
  const { _id, name, price, quantity, images } = item;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      onQuantityChange(item, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Product Image */}
      <img
        src={images[0]?.url || "https://via.placeholder.com/100"}
        alt={name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
        <p className="text-gray-600">Total: ${(price * quantity).toFixed(2)}</p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center">
        <label htmlFor={`quantity-${_id}`} className="mr-2 text-gray-700">
          Qty:
        </label>
        <input
          id={`quantity-${_id}`}
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border-gray-300 rounded-md"
        />
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemoveFromCart(item)}
        className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
      >
        <FaTrashAlt size={18} />
      </button>
    </div>
  );
};

export default CartItem;
