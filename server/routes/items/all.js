//This route gives the data for all items available and
//their prices have been formatted to show numbers with two decimals

const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data.map((item) => {
    const price = parseFloat(
      Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
    ).toFixed(2);
    return {
      ...item,
      price: price,
    };
  });
  try {
    return res.status(200).json({
      success: true,
      items,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
