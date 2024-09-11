const Cart = require("../models/cart.model");
const Product = require("../models/product.model"); // assuming you have a Product model

// Add product to cart
exports.addToCart = async (req, res) => {
  const { userId } = req.user; // Extract user ID from the request (e.g., via token)
  let { id, title, price, quantity } = req.body; // Get product ID, title, price, and quantity from the request body

  try {
    // Find the product by ID, assuming ID is a string
    // let product = await Product.findById(id);

    // if (!product) {
    //   return res.status(404).json({ message: "Product not found" });
    // }

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If the user doesn't have a cart, create one
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const cartItem = cart.items.find((item) => item.productId === id);

    if (cartItem) {
      // If the product exists in the cart, increase its quantity
      cartItem.quantity += quantity; // Adjust quantity here
    } else {
      // If the product is not in the cart, add it
      cart.items.push({
        productId: id, // Use product ID as string
        title: title,
        price: price,
        quantity: quantity, // Quantity passed from req.body
      });
    }

    // Recalculate the total price after updating the cart
    cart.calculateTotalPrice();

    // Save the updated cart
    await cart.save();

    // Respond with the updated cart
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding product to cart" });
  }
};

// Get user cart
exports.getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart" });
  }
};

// Delete item from cart
exports.deleteFromCart = async (req, res) => {
  const { userId } = req.body;
  const { productId } = req.params;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.productId !== productId);
    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting item from cart" });
  }
};

// Clear cart
exports.clearCart = async (req, res) => {
  const { userId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error clearing cart" });
  }
};
