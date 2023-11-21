var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const username = req.hostname.split(".")[0];
  res.send(`Hello from ${username} subdomain!`);
});

module.exports = router;
