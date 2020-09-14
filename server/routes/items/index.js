const items = require("express").Router();
const all = require("./all");
const single = require("./single");
const categories = require("./categories");

items.get("/", all);
items.get("/:_id", single);
items.get("/:category", categories);

module.exports = items;
