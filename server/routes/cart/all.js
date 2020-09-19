const CART = require("../../data/cart.json");
const { v4: uuidv4 } = require("uuid");

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

const addToCart = (req, res) => {
  try {
    const newItem = {
      id: uuidv4(),
      name: req.body.name,
      price: parseFloat(req.body.price),
      quantity: parseFloat(req.body.quantity),
    };

    CART.push(newItem);
    return res.status(201).json({
      success: true,
      item: newItem,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const removeFromCart = (req, res) => {
  try {
    const itemId = req.params.id;
    if (!itemId) {
      return res.status(404).json({
        success: false,
        error: "No item found",
      });
    }

    const deletedItem = CART.filter((item) => item.id === itemId);
    const index = CART.indexOf(deletedItem);
    CART.splice(index, 1);

    return res.status(200).json({
      success: true,
      item: deletedItem,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
