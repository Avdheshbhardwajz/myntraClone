const Wishlist = require("../models/wishlist.model");

// Add a product to the wishlist
// Add a product to the wishlist

exports.addToWishlist = async (req, res) => {
  try {
    const { uniqueId } = req.body; // Extract product ID from the request body
    const userId = req.user.userId; // Assuming authentication middleware sets req.user.userId

    // Find or create the wishlist for the user
    let wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, products: [] });
    }

    // Check if the product is already in the wishlist based on its id (or _id)
    const productExists = wishlist.products.some(
      (p) => p.toString() === uniqueId // Adjust to your product's unique identifier
    );

    if (productExists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    // Add the product ID to the wishlist
    wishlist.products.push(uniqueId);
    await wishlist.save();

    res.status(200).json({
      message: "Product added to wishlist successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Remove a product from the wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.userId;

    // Find the wishlist for the user
    const wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    // Check if the product is in the wishlist
    const productIndex = wishlist.products.findIndex(
      (p) => p._id.toString() === productId
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in wishlist" });
    }

    // Remove the product from the wishlist
    wishlist.products.splice(productIndex, 1);
    await wishlist.save();

    res.status(200).json({
      message: "Product removed from wishlist successfully",
      wishlist,
    });
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get the user's wishlist
exports.getUserWishlist = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find the wishlist for the user
    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    );
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    // Since you're storing full product data, you can simply return the wishlist
    res.status(200).json(wishlist);
  } catch (error) {
    console.error("Error retrieving wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
