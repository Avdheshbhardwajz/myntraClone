const mongoose = require("mongoose");

// Import the Product model
const Product = require("./product.model"); // Adjust the path as needed

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
      },
      quantity: {
        type: Number,
        default: 1, // Default quantity is 1
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

// Method to calculate total price
cartSchema.methods.calculateTotalPrice = async function () {
  const items = this.items;
  let total = 0;

  for (const item of items) {
    const product = await Product.findById(item.productId);
    if (product) {
      total += product.variant_price * item.quantity;
    }
  }

  this.totalPrice = total;
  return this.totalPrice;
};

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
