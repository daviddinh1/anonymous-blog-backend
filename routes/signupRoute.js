const { Router } = require("express");
//add controller later
const signupController = require("../controllers/signupController");
const signupRouter = Router();

signupRouter.post("/sign-up", signupController.createUser);

module.exports = signupRouter;
