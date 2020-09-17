const cart = require("express").Router();
const { getCart, addToCart } = require("./all");

cart.get("/", getCart);
cart.post("/", addToCart);

module.exports = cart;
