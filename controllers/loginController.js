require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function loginUser(req, res) {
  const { username, password } = req.body;
  console.log("what is going through the req.body:", username, password);
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    console.log("frontend is working: ", user);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );
    console.log(token);
    res.json({ token });
  } catch (error) {
    console.log("more detailed error", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { loginUser };
