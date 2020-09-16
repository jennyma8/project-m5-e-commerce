const data = require("../../data/items.json");

module.exports = (req, res) => {
  const DATA = data;
  const itemCategoryParam = req.params.category;
  const items = DATA.filter((item) => {
    return item.category.toLowerCase() === itemCategoryParam.toLowerCase();
  }).map((item) => {
    const price = parseFloat(item.price.substring(1));
    return {
      ...item,
      price: price,
    };
  });
  console.log(items);
  res.status(200).json({ items });
};
