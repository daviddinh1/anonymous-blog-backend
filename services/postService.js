const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//within this file create the queries

async function createPost(userId, body) {
  try {
    const post = await prisma.post.create({
      data: {
        userId: userId,
        body: body,
      },
    });
    return post;
  } catch (error) {
    console.error("createPost function not working error:", error);
  }
}

module.exports = { createPost };
