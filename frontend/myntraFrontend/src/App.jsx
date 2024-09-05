import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp"; // Import the SignUp page component
import SignIn from "./pages/SignIn"; // Import the SignIn page component
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignUp />} />{" "}
        {/* Add route for SignUp */}
        <Route path="/login" element={<SignIn />} />{" "}
        {/* Add route for SignIn */}
        <Route path="/products/search" element={<SearchResults />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
