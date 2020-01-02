const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", async (req, res) => {
  // const user = await User.find({}).sort({name: 1}).select('name _id');
  res.send("hello");
});

router.post("/api/convert/", urlencodedParser, function(req, res) {
  const data = "33";
  console.log(req.body);
  const num = Object.keys(req.body);
  res.send(num);
});

module.exports = router;
