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

module.exports = {
  createUser,
};
