const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter full name"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    DOB: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please enter a email id"],
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: [true, "please enter mobile number"],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
    address: {
      pincode: {
        type: Number,
      },
      address1: {
        type: String,
        required: [true, "please enter address"],
      },
      city: {
        type: String,
        required: [true, "please enter the city name"],
      },
      state: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
