import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios for API requests

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}`); // Replace with your API endpoint
        setOrder(response.data);
      } catch (error) {
        setError("Error fetching order details.");
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">{error}</p>;
  }

  if (!order) {
    return (
      <p className="text-center text-xl text-gray-600">Order not found.</p>
    );
  }

  const {
    items,
    shippingAddress,
    paymentStatus,
    totalAmount,
    createdAt,
    orderStatus,
  } = order;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Order Details</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <p>{shippingAddress.name}</p>
        <p>{shippingAddress.street}</p>
        <p>
          {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}
        </p>
        <p>{shippingAddress.country}</p>
        <p className="mt-2">{shippingAddress.phone}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6 border-t pt-4">
          <p className="font-semibold text-lg">Total</p>
          <p className="font-semibold text-lg">${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment & Status</h2>
        <p className="mb-2">
          <span className="font-semibold">Payment Status:</span> {paymentStatus}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Order Status:</span> {orderStatus}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Order Date:</span>{" "}
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Order;
