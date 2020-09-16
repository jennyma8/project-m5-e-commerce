const data = require("../../data/items.json");

module.exports = (req, res) => {
  const DATA = data;
  const itemCategoryParam = req.params.category;
  const items = DATA.filter((item) => {
    return item.category.toLowerCase() === itemCategoryParam.toLowerCase();
  });
  res.status(200).json({ items });
};
