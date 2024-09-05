const express = require("express");
const router = express.Router();

const {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
} = require("../controllers/wishlist.controller");

// Route to add a product to the wishlist
router.post("/", addToWishlist);

// Route to remove a product from the wishlist
router.delete("/:productId", removeFromWishlist);

// Route to get the user's wishlist
router.get("/", getUserWishlist);

module.exports = router;
