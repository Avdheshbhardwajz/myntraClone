// src/components/CheckoutSummary.js
import React from "react";

const CheckoutSummary = ({ items, totalAmount }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{item.productId.title}</span>
              <span>₹{item.productId.variant_price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-lg font-semibold">
        <span>Total: </span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
