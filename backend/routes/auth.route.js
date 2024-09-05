const express = require("express");

const route = express.Router();

const { login, signup } = require("../controllers/auth.controller");

route.post("/signup", signup);

route.post("/login", login);

module.exports = route;
