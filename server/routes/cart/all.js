const CART = require("../../data/cart.json");

const showCart = (req, res) => {
  res.status(200).json({ CART });
};

const emptyCart = (req, res) => {
  res.status(200).json({});
};
module.exports = { showCart, emptyCart };
