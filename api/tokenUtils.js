const jwt = require("jsonwebtoken");

// create json web token
const createAccessToken = (user) => {
  user.password = undefined;
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5s",
  });
};


module.exports = { createAccessToken };
