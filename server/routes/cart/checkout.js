//These routes are related for the checkout

const CART = require("../../data/cart.json");
const ITEMS = require("../../data/items.json");
const ORDERS = require("../../data/orders.json");

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
  //FormInfo: {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   address: req.body.address,
  //   city: req.body.city,
  //   province: req.body.province,
  //   postalCode: req.body.postalCode,
  //   country: req.body.country,
  // };

  //Validation for inputs is done here
  const formInputs = Object.values(FormInfo);
  console.log("These are the inputs:", formInputs);
  const filterForEmptyString = formInputs.filter((input) => input);

  //Are there any empty string? Checking for undefined or ""; by checking length, it flags an empty input
  const formInputsValidation =
    formInputs.length === filterForEmptyString.length;

  const orderID = RandomNumber(5000, 1);

  try {
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

    // This returns all of the Cart's item IDs that will be used
    // to update the ITEMS database
    const CurrentOrderItems = Object.keys(CART).map(Number);

    CurrentOrderItems.map((orderID) => {
      let orderItem = ITEMS.find((item) => item._id === orderID);

      orderItem.numInStock -= CART[orderID].quantity;
    });

    if (!formInputsValidation) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the inputs",
      });
    }

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
