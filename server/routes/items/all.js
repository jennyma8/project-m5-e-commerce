const fs = require("file-system");
const items = {
  items: JSON.parse(fs.readFileSync("data/items.json")),
};

module.exports = (req, res) => {
  res.status(200).send(items);
};
