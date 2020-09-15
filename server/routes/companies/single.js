const data = require("../../data/companies.json");

module.exports = (req, res) => {
  const companies = data;
  const companyId = req.params._id * 1;
  const company = companies.filter((company) => company._id === companyId);

  res.status(200).json({ company });
};
