require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
  },
};
