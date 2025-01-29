const express = require("express");
const signupRouter = require("./routes/signupRoute");
const passport = require("./services/loginService");
const loginRouter = require("./routes/loginRouter");
const app = express();

//add the middleware that allows me to use req.body and .json
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", signupRouter);
app.use("/", loginRouter);

//add the last thing idk why we need it
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
