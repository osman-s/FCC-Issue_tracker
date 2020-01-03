const mongoose = require("mongoose");
const { Post, validate } = require("../models/posts.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  // const user = await User.find({}).sort({name: 1}).select('name _id');
  res.send("hello");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const posts = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let post = await Post.findOne({ title: posts.title });
  if (post) return res.status(400).send("Issue already posted.");

  post = new Post({
    title: posts.title,
    text: posts.text,
    createdby: posts.createdby,
    assignedto: posts.assignedto,
    status: posts.status
  });
  await post.save();
  // user = _.pick(user, ["name", "_id"]);
  res.send(post);
});

module.exports = router;
