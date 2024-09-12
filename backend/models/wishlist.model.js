const mongoose = require("mongoose");

// Import the Product model
const Product = require("./product.model"); // Adjust the path as needed

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
    },
  ],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
