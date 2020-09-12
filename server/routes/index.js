const routes = require("express").Router();
const items = require("./items");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});
routes.use("/items", items);

module.exports = routes;
