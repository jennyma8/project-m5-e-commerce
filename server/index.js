"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("file-system");
const routes = require("./routes");

const items = JSON.parse(fs.readFileSync("data/items.json"));
const companies = JSON.parse(fs.readFileSync("data/companies.json"));
const cart = [];

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use("/", routes)

  // REST endpoints?
  // .get("/", (req, res) => res.status(200).send("Welcome to the homepage yo yo"))
  // .get("/items", (req, res) => {
  //   res.status(200).send(items);
  // })
  // .get("/companies", (req, res) => {
  //   res.status(200).send(companies);
  // })
  // .get("*", (req, res) => {
  //   res.status(404).send("ERROR!");
  // })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
