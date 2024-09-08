import React from "react";
import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout/:id" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;
