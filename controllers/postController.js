//within the controller send in a random id
const postService = require("../services/postService");
const commentService = require("../services/commentService");

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

async function createComment(req, res, next) {
  const { text, postId } = req.body; //remember when you create the "form" this is what the name should be
  const userId = req.user.id;
  try {
    const comment = await commentService.createComment(postId, userId, text);
    console.log("comment object:", comment);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
}
async function getPost(req, res, next) {
  //post should have the comment
  try {
    const post = await postService.randomPostOutputter();
    console.log("this is the id of the post", post.id);
    const postWithComments = await commentService.getPostWithComments(post.id);
    if (post === null) {
      res.status(500).json({ error: "No post in db" });
    } else {
      res.json(postWithComments);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { createPost, getPost, createComment };
