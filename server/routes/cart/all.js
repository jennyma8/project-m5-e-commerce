const CART = require("../../data/cart.json");

const getCart = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      CART,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const addToCart = (req, res) => {};

module.exports = { getCart, addToCart };
