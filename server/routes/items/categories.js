const data = require("../../data/items.json");

module.exports = (req, res) => {
  const DATA = data;
  const itemCategoryParam = req.params.category;
  const items = DATA.filter((item) => {
    return item.category.toLowerCase() === itemCategoryParam.toLowerCase();
  }).map((item) => {
    const price = parseFloat(
      Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
    ).toFixed(2);
    return {
      ...item,
      price: price,
    };
  });
  res.status(200).json({ items });
};
