//This route gives you all categories available in our database only

const data = require("../../data/items.json");

module.exports = (req, res) => {
  const items = data;
  const categories = [...new Set(items.map((item) => item.category))];
  try {
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
