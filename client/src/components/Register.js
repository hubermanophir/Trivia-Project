import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register({
  userInputHandler,
  passwordInputHandler,
  userName,
  password,
  setNewUser,
  setUserExists,
  setUserName,
  setPassword,
}) {
  useEffect(() => {
    setUserName("");
    setPassword("");
  }, []);

  const registerClick = async () => {
    const user = {
      name: userName,
      password: password,
    };

    if (userName === "" || password === "") {
      console.log("Username and password required");
      return;
    }
    try {
      await axios.post("/api/user/register", user);
      console.log(userName);
      setNewUser(true);
      setUserExists(true);
    } catch (error) {
      console.log("Error signing up");
    }
  };
  return (
    <div>
      <h1 id="register-title">Welcome to the best Trivia ever </h1>
      <h2>Register Now!</h2>
      <div id="register-container">
        <input
          id="username-input-register"
          type="text"
          placeholder="Enter user name"
          onChange={(e) => userInputHandler(e.target.value)}
          required
        />
        <input
          id="password-input-register"
          type="password"
          placeholder="Enter password"
          onChange={(e) => passwordInputHandler(e.target.value)}
          required
        />
        <Button
          onClick={registerClick}
          className="scoreboard-button"
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
