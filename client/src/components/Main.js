import React, { useState } from "react";
import Home from "./Home";
import Scoreboard from "./Scoreboard";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Game from "./Game";
import NotFound from "./NotFound";
import Login from "./Login";
import Register from "./Register";

export default function Main() {
  const [userExists, setUserExists] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userInputHandler = (value) => {
    setUserName(value);
  };

  const passwordInputHandler = (value) => {
    setPassword(value);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {userExists ? (
              <Redirect to="/home" />
            ) : (
              <Login
                userInputHandler={userInputHandler}
                passwordInputHandler={passwordInputHandler}
                userName={userName}
                password={password}
                setUserExists={setUserExists}
              />
            )}
          </Route>
          {newUser ? (
            <Redirect to="/home" />
          ) : (
            <Route exact path="/register">
              <Register
                userInputHandler={userInputHandler}
                passwordInputHandler={passwordInputHandler}
                userName={userName}
                password={password}
                setNewUser={setNewUser}
              />
            </Route>
          )}
          <Route exact path="/home">
            {userExists ? (
              <Home setUserExists={setUserExists} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/scoreboard">
            <Scoreboard />
          </Route>
          <Route exact path="/game">
            <Game userName={userName} />
          </Route>
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
