const express = require("express");
const router = express.Router();
const path = require("path");

/* GET about page. */
router.get("/", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "html", "about.html"));
});

module.exports = router;
