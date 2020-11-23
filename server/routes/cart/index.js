const cart = require("express").Router();
const { getCheckout, postToCheckout } = require("./checkout");
const {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("./new");

cart.get("/", getCart);
cart.post("/", addToCart);
cart.put("/", updateCart);
cart.delete("/:id", removeFromCart);
cart.delete("/", clearCart);
cart.get("/checkout/:id", getCheckout);
cart.post("/checkout", postToCheckout);

module.exports = cart;
