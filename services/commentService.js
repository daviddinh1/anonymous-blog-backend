const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createComment(postId, userId, body) {
  try {
    const comment = await prisma.comment.create({
      data: {
        postId: postId,
        userId: userId,
        body: body,
      },
    });
    return comment;
  } catch (error) {
    console.error("Create comment is not working error:", error);
  }
}

async function getPostWithComments(postId) {
  try {
    const postWithComments = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        comment: true,
      },
    });
    console.log("post w comments json:", postWithComments);
    return postWithComments;
  } catch (error) {
    console.error("post with comments is not working error: ", error);
  }
}

module.exports = { getPostWithComments, createComment };
