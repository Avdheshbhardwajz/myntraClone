const express = require("express");
const router = express.Router();

// Import product controllers
const {
  addProduct,
  getProducts,

  updateProduct,
  deleteProduct,
  addProductReview,
  getProductReviews,
  deleteProductReview,
  getFeaturedProducts,
  searchProducts,
  getAllBrands,
  getProductOne,
} = require("../controllers/product.controller");

// Routes

// @route   POST /api/products
// @desc    Create a new product
// @access  Private/Admin
router.post("/", addProduct);

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", getProducts);

// @route   GET /api/products/featured
// @desc    Get featured products
// @access  Public
router.get("/featured", getFeaturedProducts);

// @route   GET /api/products/search
// @desc    Search products by keyword
// @access  Public
router.get("/search", searchProducts);

// @route   GET /api/products/:id
// @desc    Get product by ID
// @access  Public
router.get("/:id", getProductOne);

// @route   PUT /api/products/:id
// @desc    Update product by ID
// @access  Private/Admin
router.put("/:id", updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete product by ID
// @access  Private/Admin
router.delete("/:id", deleteProduct);

// @route   POST /api/products/:id/reviews
// @desc    Add a product review
// @access  Private
router.post("/:id/reviews", addProductReview);

// @route   GET /api/products/:id/reviews
// @desc    Get product reviews
// @access  Public
router.get("/:id/reviews", getProductReviews);

// @route   DELETE /api/products/:id/reviews/:reviewId
// @desc    Delete a product review by ID
// @access  Private/Admin
router.delete("/:id/reviews/:reviewId", deleteProductReview);

router.get("/brand", getAllBrands);

module.exports = router;
