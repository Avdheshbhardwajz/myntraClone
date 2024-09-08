// src/components/PaymentForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ totalAmount }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just redirect to a success page
    navigate("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>

      {/* User Information */}
      <div className="space-y-2">
        <label className="block">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Payment Information */}
      <div className="space-y-2">
        <label className="block">Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block">Expiry Date:</label>
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="space-y-2">
          <label className="block">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800"
        >
          Pay ${totalAmount.toFixed(2)}
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
