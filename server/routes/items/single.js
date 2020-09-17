const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const itemId = req.params._id * 1;
  const item = items
    .filter((item) => item._id === itemId)
    .map((item) => {
      const price = Number(
        parseFloat(
          Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
        ).toFixed(2)
      );
      return { ...item, price: price };
    });
  console.log(item);
  try {
    return res.status(200).json({
      success: true,
      item,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
