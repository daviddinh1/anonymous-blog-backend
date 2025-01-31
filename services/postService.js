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

async function randomPostOutputter() {
  try {
    const postIds = await prisma.post.findMany({
      select: { id: true },
    });

    if (postIds.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * postIds.length);
    const randomId = postIds[randomIndex].id;

    const randomPost = await prisma.post.findUnique({
      where: { id: randomId },
    });

    return randomPost;
  } catch (error) {
    console.error("randomPostOutputter function failed", error);
    return null;
  }
}

module.exports = { createPost, randomPostOutputter };
