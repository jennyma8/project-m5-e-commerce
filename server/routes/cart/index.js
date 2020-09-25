const cart = require("express").Router();
// const { getCart, addToCart, removeFromCart, clearCart } = require("./all");
const { getCheckout, postToCheckout } = require("./checkout");
const { getCart, addToCart, removeFromCart, clearCart } = require("./new");

cart.get("/", getCart);
cart.post("/", addToCart);
cart.delete("/:id", removeFromCart);
cart.delete("/", clearCart);
cart.get("/checkout/:id", getCheckout);
cart.post("/checkout", postToCheckout);

module.exports = cart;
