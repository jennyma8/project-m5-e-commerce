const items = require("express").Router();
const all = require("./all");

items.get("/", all);

module.exports = items;
