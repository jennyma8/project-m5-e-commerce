const companies = require("express").Router();
const all = require("./all");
const single = require("./single");

companies.get("/", all);
companies.get("/:_id", single);

module.exports = companies;
