const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  uniq_id: String,
  crawl_timestamp: String,
  product_id: Number,
  link: String,
  size: String,
  variant_sku: String,
  brand: String, // <-- Important field for your "Shop by Brand" feature
  title: String,
  actual_color: String,
  dominant_color: String,
  product_type: String,
  images: String,
  body: String,
  product_details: String,
  variant_price: Number,
  is_in_stock: String,
  inventory: Number,
  // add other fields...
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
