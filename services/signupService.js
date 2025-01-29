const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(username, email, password) {
  try {
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    console.error("error createing user", error.message);
    throw new error("Failed to create user. Please try again.");
  }
}

async function getUser() {
  try {
    const user = await prisma.user.findMany();
    console.log(user);
    return user;
  } catch (error) {
    console.error("getuser failing");
    throw new error("get user is not working");
  }
}

module.exports = {
  createUser,
  getUser,
};
