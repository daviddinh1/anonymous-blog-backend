const { Strategy, ExtractJwt } = require("passport-jwt");
const { PrismaClient } = require("@prisma/client");
const passport = require("passport");

const prisma = new PrismaClient();

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(opts, async function (jwt_payload, done) {
    try {
      console.log(jwt_payload);
      const user = await prisma.user.findUnique({
        where: {
          id: jwt_payload.id,
        },
      });
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
