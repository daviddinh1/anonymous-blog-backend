const { Router } = require("express");
const passport = require("passport");
const postController = require("../controllers/postController");

const postRouter = Router();

postRouter.post(
  "/posts",
  passport.authenticate("jwt", { session: false }),
  postController.createPost
);

postRouter.get("/posts", postController.getPost);

//get post based on id but make it randomized
postRouter.get("/posts/:id", (req, res) => {
  //frontend handles this somehow
  res.json({ test: "testing" });
});

module.exports = postRouter;
