const cart = require("express").Router();
const { getCart, addToCart, removeFromCart } = require("./all");

cart.get("/", getCart);
cart.post("/", addToCart);
cart.delete("/:id", removeFromCart);

module.exports = cart;
