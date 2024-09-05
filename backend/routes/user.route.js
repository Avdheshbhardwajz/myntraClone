const express = require("express");
const router = express.Router();

// Import the user controllers
const {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
  getAllUsers, // For admin purposes (optional)
} = require("../controllers/user.controller");

// @route   GET /api/users/profile
// @desc    Get the logged-in user's profile
// @access  Private
router.get("/profile", getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update the logged-in user's profile
// @access  Private
router.put("/profile", updateUserProfile);

// @route   DELETE /api/users/profile
// @desc    Delete the logged-in user's account
// @access  Private
router.delete("/profile", deleteUserAccount);

// Optional: For admin purposes only
// @route   GET /api/users
// @desc    Get all users (Admin only)
// @access  Private/Admin
router.get("/", getAllUsers);

module.exports = router;
