const { Router } = require("express");
const passport = require("passport");
const loginController = require("../controllers/loginController");

const loginRouter = Router();

loginRouter.post("/login", loginController.loginUser);

loginRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      message: "Profile access granted",
      user: req.user,
    });
  }
); //change later when trying to see which route to protect

module.exports = loginRouter;
