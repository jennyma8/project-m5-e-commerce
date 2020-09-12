const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const itemId = req.params._id * 1;
  const item = items.filter((item) => item._id === itemId);

  res.status(200).json({ item });
};
