//This route gives only the information for all companies available in the database

const data = require("../../data/companies.json");

module.exports = (req, res) => {
  const companies = data;
  try {
    return res.status(200).json({
      success: true,
      companies,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
