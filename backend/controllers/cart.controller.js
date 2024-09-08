const Cart = require("../models/cart.model");
const Product = require("../models/product.model"); // assuming you have a Product model

// Add product to cart
exports.addToCart = async (req, res) => {
  const { userId } = req.body;
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const cartItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.items.push({
        productId: product._id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.image,
      });
    }

    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to cart" });
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

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
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
