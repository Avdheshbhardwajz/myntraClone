const Cart = require("../models/bag.model"); // Import the Cart model

// Add an item to the cart
exports.addItemToCart = async (req, res) => {
  try {
    const { productId, quantity, size, color } = req.body;

    // Check if the user already has a cart
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ user: req.user._id });
    }

    // Check if the item already exists in the cart
    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.items.push({
        product: productId,
        quantity,
        size,
        color,
      });
    }

    // Save the cart
    await cart.save();

    // Send response
    res.status(200).json({ message: "Item added to cart successfully", cart });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get the user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate({
      path: "items.product",
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error retrieving cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update an item in the cart
exports.updateCartItem = async (req, res) => {
  try {
    const { quantity, size, color } = req.body;
    const { itemId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItem = cart.items.id(itemId);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (quantity !== undefined) {
      cartItem.quantity = quantity;
    }

    if (size !== undefined) {
      cartItem.size = size;
    }

    if (color !== undefined) {
      cartItem.color = color;
    }

    await cart.save();

    res.status(200).json({ message: "Cart item updated successfully", cart });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Remove an item from the cart
exports.removeCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItem = cart.items.id(itemId);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cartItem.remove(); // Remove the item from the cart

    await cart.save();

    res.status(200).json({ message: "Cart item removed successfully", cart });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Clear the cart
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Clear all items from the cart
    cart.items = [];

    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
