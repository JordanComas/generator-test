var express = require("express");
var router = express.Router();

/* GET contact page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Contact page" });
});

module.exports = router;
