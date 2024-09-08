const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter the product description"],
    },
    price: {
      type: String,
      required: [true, "Please enter the product price"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    brand: {
      type: String,
      required: [true, "Please enter the brand name"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter stock quantity"],
      validate: {
        validator: function (value) {
          return Number.isInteger(value) && value >= 0;
        },
        message: "Stock must be a non-negative integer",
      },
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: String,
      default: "0",
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
