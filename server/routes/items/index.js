const items = require("express").Router();
const all = require("./all");
const single = require("./single");

items.get("/", all);
items.get("/:_id", single);
module.exports = items;
