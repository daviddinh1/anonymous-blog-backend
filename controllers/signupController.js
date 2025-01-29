//bcrypt goes here
const signupService = require("../services/signupService");
const bcrypt = require("bcryptjs");

async function createUser(req, res, next) {
  const { username, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    await signupService.createUser(username, email, hashPass);
    // Send a proper response
    res.status(201).json({
      message: "User successfully created",
      user: { username, email }, // Never send the password back
    });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const users = await signupService.getUser();
    res.status(201).json({ users });
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, getUser };
