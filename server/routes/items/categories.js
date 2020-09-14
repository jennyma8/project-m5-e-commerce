const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const itemCategory = req.params.category * 1;
  const category = items.filter((item) => item.category === itemCategory);

  res.status(200).json({ category });
};
