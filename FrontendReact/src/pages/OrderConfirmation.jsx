// src/pages/OrderConfirmation.js
import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <p className="mt-6">
          <a href="/" className="text-blue-600 hover:underline">
            Continue Shopping
          </a>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
