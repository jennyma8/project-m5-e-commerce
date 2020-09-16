const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const categories = [...new Set(items.map((item) => item.category))];
  res.status(200).json(categories);
};
