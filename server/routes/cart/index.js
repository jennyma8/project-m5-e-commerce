const cart = require("express").Router();
const { showCart, addToCart } = require("./all");

cart.get("/", showCart);
cart.post("/", addToCart);

module.exports = cart;
