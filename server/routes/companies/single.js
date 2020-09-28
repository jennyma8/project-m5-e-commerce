//This route gives the information for the selected company by its ID

data = require("../../data/companies.json");

module.exports = (req, res) => {
  const companies = data;
  const companyId = req.params._id * 1;
  const company = companies.filter((company) => company._id === companyId);
  try {
    return res.status(200).json({
      success: true,
      company,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
