const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here are the companies :)");
});

module.exports = router;
