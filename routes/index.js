var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.post("/redirect", (req, res) => {
  const username = req.body.username;
  // Redirect to the subdomain with the provided username
  res.redirect(`http://${username}.user.localhost:3000/users`);
});

module.exports = router;
