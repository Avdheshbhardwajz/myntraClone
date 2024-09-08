// src/pages/Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import CheckoutSummary from "../components/CheckoutSummary";
import PaymentForm from "../components/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <CheckoutSummary items={cartItems} totalAmount={totalAmount} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <PaymentForm totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
