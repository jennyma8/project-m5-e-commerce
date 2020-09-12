const routes = require("express").Router();
const items = require("./items");
const companies = require("./companies");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});
routes.use("/items", items);
routes.use("/companies", companies);

module.exports = routes;
