require("dotenv").config();
const { hashSync, compareSync, genSaltSync } = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// create json web token
const createToken = (user) => {
  user.password = undefined;
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

router.post("/register", (req, res) => {
  const { username, password } = req.body;
});

module.exports = router;
