const cart = require("express").Router();
const { showCart, emptyCart } = require("./all");

cart.get("/", showCart);
cart.get("/empty", emptyCart);

module.exports = cart;
