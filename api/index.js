const { Router } = require("express");
const trivia = require("./trivia");
const user = require("./user");
const jwt = require("jsonwebtoken");

const api = Router();

const cookieValidator = (req, res, next) => {
  let token = req.get("Access-Token");
  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid access token" });
    } else {
      next();
    }
  });
};

api.use("/trivia", cookieValidator, trivia);
api.use("/user", user);

module.exports = api;
