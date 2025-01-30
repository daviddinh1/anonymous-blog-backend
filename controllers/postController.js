//within the controller send in a random id
const postService = require("../services/postService");

async function createPost(req, res, next) {
  const body = req.body.body;
  console.log("controller:", body);
  try {
    console.log(req.user.id, body);
    const post = await postService.createPost(req.user.id, body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}

module.exports = { createPost };
