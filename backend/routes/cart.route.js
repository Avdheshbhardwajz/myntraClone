const express = require("express");
const {
  addToCart,
  getCart,
  deleteFromCart,
  clearCart,
} = require("../controllers/cart.controller");
const router = express.Router();

// Add to cart
router.post("/add", addToCart);

// Get user cart
router.get("/", getCart);

// Delete item from cart
router.delete("/delete/:productId", deleteFromCart);

// Clear cart
router.delete("/clear", clearCart);

module.exports = router;
