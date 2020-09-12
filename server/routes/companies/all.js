const data = require("../../data/companies.json");

module.exports = (req, res) => {
  const companies = data;

  res.status(200).json({ companies });
};
