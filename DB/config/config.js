require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
    socketPath: "/cloudsql/trivia-project-312711:europe-west3:trivia"
  },
  test: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
    socketPath: "/cloudsql/trivia-project-312711:europe-west3:trivia"
  },
  production: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "mysql",
    socketPath: "/cloudsql/trivia-project-312711:europe-west3:trivia"
  },
};
