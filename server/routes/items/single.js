//This route gives the information for the selected item as well as
//relate the right company name with its company ID

const data = require("../../data/items.json");
const companiesData = require("../../data/companies.json");

module.exports = (req, res) => {
  const items = data;
  const COMPANIES = companiesData;
  const itemId = req.params._id * 1;
  const item = items
    .filter((item) => item._id === itemId)
    .map((item) => {
      const price = parseFloat(
        Math.round(parseFloat(item.price.substring(1) * 100).toFixed(2)) / 100
      ).toFixed(2);
      return { ...item, price: price };
    });

  const company = COMPANIES.filter(
    (company) => company._id === item[0].companyId
  );

  try {
    return res.status(200).json({
      success: true,
      item,
      company,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
