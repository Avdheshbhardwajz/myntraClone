const express = require("express");

const mongoose = require("mongoose");
const connection = require("./config/connection");
const auth = require("./routes/auth.route");
const logger = require("./middlewares/logging.middleware");
const limiter = require("./middlewares/ratelimit.middleware");
const cors = require("cors");
const cart = require("./routes/cart.route");
const order = require("./routes/order.route");
const product = require("./routes/product.route");
const user = require("./routes/user.route");
const wishlist = require("./routes/wishlist.route");
const authMiddleware = require("./middlewares/auth.middleware");
const errorHandler = require("./middlewares/errhandling.middleware");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).send("server is running fine");
});

app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/product", product);
app.use("/api/v1/cart", authMiddleware, cart);
app.use("/api/v1/order", authMiddleware, order);
app.use("/api/v1/wishlist", authMiddleware, wishlist);

app.use(errorHandler);
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await connection;

    console.log(`mongoDB is connected and server is running on port ${PORT}`);
  } catch (error) {
    console.log(`${error.message} - ${error}`);
  }
});
