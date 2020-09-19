const cart = require("express").Router();
const { getCart, addToCart, removeFromCart } = require("./all");
const { getCheckout, postToCheckout } = require("./checkout");

cart.get("/", getCart);
cart.post("/", addToCart);
cart.delete("/:id", removeFromCart);
cart.get("/checkout", getCheckout);
cart.post("/checkout", postToCheckout);

module.exports = cart;
