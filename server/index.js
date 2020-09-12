"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const dataRoute = require("./routes/getData");
const companiesRoute = require("./routes/getCompanies");
const errorRoute = require("./routes/error");

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
  // Route imports
  .use("/data", dataRoute)
  .use("/companies", companiesRoute)
  .use("/error", errorRoute)

  // REST endpoints?
  .get("/", (req, res) => res.status(200).send("Welcome to the homepage"))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
