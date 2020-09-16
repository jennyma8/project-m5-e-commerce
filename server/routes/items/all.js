// const fs = require("file-system");
// const items = {
//   items: JSON.parse(fs.readFileSync("data/items.json")),
// };

// module.exports = (req, res) => {
//   res.status(200).send(items);
// };
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

  res.status(200).json({ items });
};
