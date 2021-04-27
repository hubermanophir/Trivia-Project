require("dotenv").config();
const { hashSync, compareSync, genSaltSync } = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  createUser,
  checkUserExist,
  addScore,
} = require("../DB/questionQueries");

// create json web token
const createToken = (user) => {
  user.password = undefined;
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

router.post("/register", async (req, res) => {
  const { name, password } = req.body;
  const doesExist = await checkUserExist(req.body);
  if (doesExist) {
    return res.status(400).json({ error: "User already exists" });
  }
  const hashedPassword = hashSync(password, genSaltSync(10));
  try {
    await createUser({ name: name, password: hashedPassword });
  } catch (error) {
    return res.status(500).json({ error: "Could not add user" });
  }
  const AccessToken = createToken(req.body);
  return res.status(200).json({ AccessToken });
});

router.post("/score", async (req, res) => {
  const { name, id, score } = req.body;
  try {
    await addScore({ name, id, score });
    return res.status(200).json({ message: "Score added" });
  } catch (error) {
    return res.status(500).json({ error: "Could not add score" });
  }
});

module.exports = router;
