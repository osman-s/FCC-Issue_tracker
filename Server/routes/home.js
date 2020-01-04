const mongoose = require("mongoose");
const { Post, validate, validateUpdate } = require("../models/posts.model");
const express = require("express");
const router = express.Router();

// router.get("/", async (req, res) => {
//   // const user = await User.find({}).sort({name: 1}).select('name _id');
//   res.send("hello");
// });

router.get("/", async (req, res) => {
  const posts = await Post.find()
    .select("-__v")
    .sort("title");
  res.send(posts);
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

router.put("/", async (req, res) => {
  const posts = req.body;
  // const { error } = validateUpdate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const post = await Post.findByIdAndUpdate(
    posts._id,
    {
      title: posts.title,
      text: posts.text,
      createdby: posts.createdby,
      assignedto: posts.assignedto,
      status: posts.status,
      state: posts.state,
      updatedon: Date.now()
    },
    { new: true }
  );

  if (!post)
    return res.status(404).send("The issue with the given ID was not found.");

  res.send(req.body);
});

// router.delete("/:id", [auth, admin], async (req, res) => {
//   const movie = await Movie.findByIdAndRemove(req.params.id);

//   if (!movie)
//     return res.status(404).send("The movie with the given ID was not found.");

//   res.send(movie);
// });

// router.get("/:id", validateObjectId, async (req, res) => {
//   const movie = await Movie.findById(req.params.id).select("-__v");

//   if (!movie)
//     return res.status(404).send("The movie with the given ID was not found.");

//   res.send(movie);
// });

module.exports = router;
