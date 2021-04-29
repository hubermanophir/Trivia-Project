const { Router } = require("express");
const trivia = require("./trivia");
const user = require("./user");
const jwt = require("jsonwebtoken");
const { createAccessToken } = require("./tokenUtils");

const api = Router();

const cookieValidator = (req, res, next) => {
  const { body } = req;
  let token = req.cookies["Access-Token"];
  let refreshToken = req.cookies["Refresh-Token"];
  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }
  token = token.split(" ")[1];

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token required" });
  }
  refreshToken = refreshToken.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err.message);
      if (err.message === "jwt expired") {
        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, decoded) => {
            if (err) {
              return res.status(403).json({ message: "Invalid refresh token" });
            } else {
              res.clearCookie("Access-Token");
              const accessToken = createAccessToken(body);
              res.cookie("Access-Token", `Bearer ${accessToken}`);
              next();
            }
          }
        );
      } else {
        return res.status(403).json({ message: "Invalid access token" });
      }
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

api.use("/trivia", cookieValidator, trivia);
api.use("/user", user);

module.exports = api;
