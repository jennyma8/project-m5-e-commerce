const items = require("express").Router();
const all = require("./all");
const single = require("./single");
const categories = require("./categories");
const allCategories = require("./allCategories");

items.get("/", all);
items.get("/category", allCategories);
items.get("/item/:_id", single);
items.get("/category/:category", categories);

module.exports = items;
