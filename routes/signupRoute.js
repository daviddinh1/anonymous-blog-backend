const { Router } = require("express");
//add controller later
const signupController = require("../controllers/signupController");
const signupRouter = Router();

signupRouter.get("/users", signupController.getUser);
signupRouter.post("/sign-up", signupController.createUser);

module.exports = signupRouter;
