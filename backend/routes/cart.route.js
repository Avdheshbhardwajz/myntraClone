const express = require("express");
const router = express.Router();
const {
  addItemToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require("../controllers/cart.controller");

// Add an item to the cart
router.post("/add", addItemToCart);

// Get the user's cart
router.get("/", getCart);

// Update an item in the cart (e.g., change quantity)
router.put("/update/:itemId", updateCartItem);

// Remove an item from the cart
router.delete("/remove/:itemId", removeCartItem);

// Clear the cart (remove all items)
router.delete("/clear", clearCart);

module.exports = router;
