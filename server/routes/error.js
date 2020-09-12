const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Oh no! 404 ERROR :(");
});

module.exports = router;
