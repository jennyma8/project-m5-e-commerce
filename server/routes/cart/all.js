const CART = require("../../data/cart.json");
const ITEMS = require("../../data/items.json");

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
  const DATA = req.body;
  // console.log("POST DATA IS:", DATA);

  // Returns the array index of the item in the items.json file that
  // matches the POST request'
  const Index = ITEMS.findIndex((item) => item._id === DATA.id);
  // console.log("INDEX MATCH IS:", testIndex);

  const InventoryItem = ITEMS.find((item) => item._id === DATA.id);
  // console.log("ITEM MATCHED IS:", test);

  // THIS GETS STORED
  const newItem = {
    id: uuidv4(),
    name: DATA.name,
    price: DATA.price,
    quantity: DATA.quantity,
  };

  // CONSOLE LOG TO REMOVE
  // console.log(newItem);

  const resItem = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  try {
    if (ITEMS[Index].numInStock === 0) {
      console.log("Cant sell this item anymore!");
      return res.status(500).json({
        success: false,
      });
    } else {
      console.log("Before Purchase:", ITEMS[Index].numInStock);

      ITEMS[Index].numInStock -= DATA.quantity;

      console.log("After Purchase:", ITEMS[Index].numInStock);

      CART.push(newItem);

      return res.status(201).json({
        success: true,
        item: newItem,
        items: ITEMS,
      });
    }
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

const clearCart = (req, res) => {
  try {
    CART.splice(0, CART.length);

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

module.exports = { getCart, addToCart, removeFromCart, clearCart };
