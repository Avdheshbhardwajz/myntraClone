const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assuming there's a User model
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // assuming there's a Product model
        required: true,
      },
      title: String,
      price: Number,
      quantity: {
        type: Number,
        default: 1,
      },
      image: String,
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

cartSchema.methods.calculateTotalPrice = function () {
  this.totalPrice = this.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return this.totalPrice;
};

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
