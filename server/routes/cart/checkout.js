const CART = require("../../data/cart.json");
const ITEMS = require("../../data/items.json");
const ORDERS = require("../../data/orders.json");
const { v4: uuidv4 } = require("uuid");

// ################### PRELIM FUNCTIONS ###########################

const QST = 0.09975;
const GST = 0.05;

//This is the shorter version of the UUID
// there is low risk of having the same order ID ~ 0.02%
function RandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// ################################################################

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
    console.log("Current Cart:", CART);

    const totalPrice = Object.values(CART).reduce(
      (sum, price) => sum + price.price * price.quantity,
      0
    );

    const totalQuantity = Object.values(CART).reduce(
      (sum, q) => sum + q.quantity,
      0
    );

    ORDERS[orderID] = {
      items: CART,
      customer: FormInfo,
      finalPrice: (totalPrice * (1 + GST + QST)).toFixed(2),
      qtyToShip: totalQuantity,
    };
    console.log("Current Orders:", ORDERS);

    // This here is to remove the quantity of inventory based on the CART

    // console.log(
    //   "Accessing all cart items",
    //   Object.keys(ORDERS[orderID].items).map(Number)
    // );

    // This returns all of the Cart's item IDs that will be used
    // to update the ITEMS database
    const CurrentOrderItems = Object.keys(CART).map(Number);

    // const CurrentOrderItems = Object.keys(ORDERS[orderID].items).map(Number);

    CurrentOrderItems.map((orderID) => {
      let orderItem = ITEMS.find((item) => item._id === orderID);
      // console.log("Item Before Update", orderItem);
      orderItem.numInStock -= CART[orderID].quantity;
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
