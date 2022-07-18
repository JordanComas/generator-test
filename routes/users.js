var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "Profile page" });
});

router.post("/signup", function (req, res, next) {
  if (!req.body.user || !req.body.password) {
    res.json({ message: "Enter username and password" });
  } else {
    res.json({ user: req.body.user, password: req.body.password });
  }
});

router.get("/:user", function (req, res, next) {
  res.json({ user: req.params.user });
});

module.exports = router;
