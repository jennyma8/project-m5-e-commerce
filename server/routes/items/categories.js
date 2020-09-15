const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const itemCategoryParam = req.params.category;
  const itemCategory = items.filter((item) => {
    return item.category.toLowerCase() === itemCategoryParam.toLowerCase();
  });
  res.status(200).json({ itemCategory });
};
