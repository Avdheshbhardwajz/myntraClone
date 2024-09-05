const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getUserOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/order.controller");

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post("/", createOrder);

// @route   GET /api/orders/:orderId
// @desc    Get order by ID
// @access  Private
router.get("/:orderId", getOrderById);

// @route   GET /api/orders/user/:userId
// @desc    Get all orders of a user
// @access  Private
router.get("/user/:userId", getUserOrders);

// @route   PUT /api/orders/:orderId/status
// @desc    Update the status of an order
// @access  Private
router.put("/:orderId/status", updateOrderStatus);

// @route   DELETE /api/orders/:orderId
// @desc    Delete an order
// @access  Private
router.delete("/:orderId", deleteOrder);

module.exports = router;
