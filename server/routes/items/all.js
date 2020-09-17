const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data.map((item) => {
    const price = Number(
      parseFloat(
        Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
      ).toFixed(2)
    );
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
