const CART = require("../../data/cart.json");
const ITEMS = require("../../data/items.json");

const FIXED_ITEMS = ITEMS.map((item) => {
  const price = parseFloat(
    Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
  ).toFixed(2);

  // data = [{ ...items }];
  return {
    ...item,
    price: price,
  };
});

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
  const Index = FIXED_ITEMS.findIndex((item) => item._id === DATA.id);
  // console.log("INDEX MATCH IS:", testIndex);

  const InventoryItem = FIXED_ITEMS.find((item) => item._id === DATA.id);
  // console.log("ITEM MATCHED IS:", test);

  const CheckItem = CART.some((item) => item.id === DATA.id);
  console.log("This is the pre-check cart Item", CheckItem);

  const CartIndex = CART.findIndex((item) => item.id === DATA.id);

  let newItem = null;

  // if (!CheckItem) {
  //   newItem = {
  //     // id: uuidv4(),
  //     id: DATA.id,
  //     name: DATA.name,
  //     price: DATA.price,
  //     quantity: DATA.quantity,
  //   };
  // } else {
  //   newItem = {
  //     // id: uuidv4(),
  //     id: DATA.id,
  //     name: DATA.name,
  //     price: DATA.price,
  //     quantity: CART[CartIndex].quantity + 1,
  //   };
  // }

  // THIS GETS STORED
  // const newItem = {
  //   // id: uuidv4(),
  //   id: DATA.id,
  //   name: DATA.name,
  //   price: DATA.price,
  //   quantity: DATA.quantity,
  // };

  // CONSOLE LOG TO REMOVE
  // console.log(newItem);

  try {
    if (!CheckItem) {
      newItem = {
        // id: uuidv4(),
        id: DATA.id,
        name: DATA.name,
        price: DATA.price,
        quantity: DATA.quantity,
        index: CartIndex,
      };
      CART.push(newItem);
    } else {
      CART[CartIndex].quantity += 1;
    }

    if (FIXED_ITEMS[Index].numInStock === 0) {
      console.log("Cant sell this item anymore!");
      return res.status(500).json({
        success: false,
      });
    } else {
      console.log("Before Purchase:", FIXED_ITEMS[Index].numInStock);

      FIXED_ITEMS[Index].numInStock -= DATA.quantity;

      console.log("After Purchase:", FIXED_ITEMS[Index].numInStock);

      return res.status(201).json({
        success: true,
        CART,
        items: FIXED_ITEMS,
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
  console.log("item id is: ", req.params.id * 1);
  const CopyCart = CART;
  try {
    const itemId = req.params.id * 1;
    // const itemId = req.body.id;
    if (!itemId) {
      return res.status(404).json({
        success: false,
        error: "No item found",
      });
    }
    // const itemToDelete = CartCopy.filter((item) => item.id === itemId);
    // const newCart = CartCopy.filter((item) => item.id != itemId);
    // console.log("New Cart", newCart);
    const updatedCart = CART.map((item) => item.id != itemId);
    const index = CART.indexOf((item) => item.id === itemId);
    // console.log("Item to Delete", itemToDelete);
    // console.log("Item to Delete Quantity", itemToDelete[0].quantity);
    // console.log("Index to Delete", index);
    if (!updatedCart) {
      CART = [];
    } else {
      CART = updatedCart;
    }
    console.log(CART);
    // CART.splice(index, 1);

    FIXED_ITEMS.find((item) => item.id === itemId).numInStock =
      itemToDelete[0].quantity;

    return res.status(200).json({
      success: true,
      itemIndex: index,
      CART,
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
