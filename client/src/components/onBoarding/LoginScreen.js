import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function LoginScreen() {
  const { setAuth, auth } = useState(false);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Email/Password Can't Be Blank");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_MAIN_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      setAuth(true);
      localStorage.setItem("token", data.user);
      history.push("/");
    } else {
      setErrorMessage(data.user);
    }
  };

  return auth ? (
    <Redirect to="/" />
  ) : (
    <div className="login-screen-container">
      <div className="login-screen-title-container">
        <h3>Login</h3>
        <span>Get Access to your Orders, Wishlist and Recommendations</span>
      </div>
      <div className="login-form-container">
        {errorMessage && <span>{errorMessage}</span>}
        <form onSubmit={login} className="login-form">
          <div className="form-group">
            <input
              name="email"
              type="email"
              id="nameInput"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="nameInput">Email</label>
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              value={password}
              id="passwordInput"
              onChange={(e) => {
                setPassword(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="passwordInput">Password</label>
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
