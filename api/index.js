const { Router } = require("express");
const trivia = require("./trivia");
const user = require("./user");

const api = Router();

api.use("/trivia", trivia);
api.use("/user", user);

module.exports = api;
