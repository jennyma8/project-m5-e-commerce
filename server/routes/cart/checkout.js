const CART = require("../../data/cart.json");
const CHECKOUT = [];

const getCheckout = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      CHECKOUT,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const postToCheckout = (req, res) => {
  try {
    CHECKOUT.push(CART);
    return res.status(201).json({
      success: true,
      CHECKOUT,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

module.exports = { getCheckout, postToCheckout };
