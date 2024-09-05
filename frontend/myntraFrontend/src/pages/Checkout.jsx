import React, { useState } from "react";

const Checkout = ({ onPlaceOrder }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !shippingInfo.name ||
      !shippingInfo.street ||
      !shippingInfo.city ||
      !shippingInfo.state ||
      !shippingInfo.zip ||
      !shippingInfo.country ||
      !shippingInfo.phone ||
      !paymentInfo.cardNumber ||
      !paymentInfo.expiryDate ||
      !paymentInfo.cvv
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Place order with shipping and payment info
    onPlaceOrder(shippingInfo, paymentInfo);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={shippingInfo.name}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={shippingInfo.phone}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="street">
                Street Address
              </label>
              <input
                type="text"
                name="street"
                id="street"
                value={shippingInfo.street}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="city">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="state">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={shippingInfo.state}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="zip">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                value={shippingInfo.zip}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={shippingInfo.country}
                onChange={handleShippingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-medium" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
