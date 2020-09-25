const CART = require("../../data/cart.json");
const ITEMS = require("../../data/items.json");
const ORDERS = require("../../data/orders.json");
const { v4: uuidv4 } = require("uuid");

//This is the shorter version of the UUID
function RandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

//This endpoint will be reached at the end of the checkout process
//at the confirmation page. It will clear the cart from the BE
//which will update the FE via the response.
const getCheckout = (req, res) => {
  const keys = Object.keys(CART).map(Number);
  keys.map((key) => delete CART[key]);

  try {
    return res.status(200).json({
      success: true,
      CART,
      totalQuantity: 0,
      totalPrice: parseFloat(0).toFixed(2),
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//This will add the current cart and client info from the checkout
//page to the orders.json data and return the order id for the FE
//to redirect to the order confirmation page.

const postToCheckout = (req, res) => {
  const FormInfo = req.body;
  // console.log("Checkout Request Received!", BODY);

  const orderID = RandomNumber(5000, 1);
  // console.log("Order Number is:", orderID);
  // console.log("Current Cart", CART);

  try {
    ORDERS[orderID] = { items: CART, customer: FormInfo };
    // console.log("Current Orders:", ORDERS);

    // This here is to remove the quantity of inventory based on the CART

    console.log(
      "Accessing all cart items",
      Object.keys(ORDERS[orderID].items).map(Number)
    );

    const CurrentOrderItems = Object.keys(ORDERS[orderID].items).map(Number);

    CurrentOrderItems.map((order) => {
      let orderItem = ITEMS.find((item) => item._id === order);
      // console.log("Item Before Update", orderItem);
      orderItem.numInStock -= CART[order].quantity;
      // console.log("Cart Item to update", CART);
      // console.log("Item After Update", orderItem);
    });

    return res.status(201).json({
      success: true,
      orderID: orderID,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

module.exports = { getCheckout, postToCheckout };
