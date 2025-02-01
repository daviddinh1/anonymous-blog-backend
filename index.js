const express = require("express");
const signupRouter = require("./routes/signupRoute");
const passport = require("./services/loginService");
const loginRouter = require("./routes/loginRouter");
const postRouter = require("./routes/postRouter");
const cors = require("cors"); // Import CORS middleware

const app = express();

//add the middleware that allows me to use req.body and .json
app.use(cors()); //fix later when upload site

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/", postRouter);
//add the last thing idk why we need it
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
