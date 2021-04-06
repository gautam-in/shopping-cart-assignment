import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

function errorMessage(field, error) {
  if (!field && error) return true;
  else return false;
}
function postData(email, password) {
  var axios = require("axios");
  var config = {
    method: "post",
    url: "http://localhost:5000/login",
    headers: {},
  };

  axios(config)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  function submit(e) {
    if (!email || !password) {
      setError(true);
      return;
    }
    e.preventDefault();
    postData(email, password);
    history.push("home");
  }

  function handler() {
    if (!email || !password) {
      setError(true);
      return;
    }
  }

  return (
    <div className={"loginContainer"}>
      <div>
        <span className="login">Login</span>
        <span className="login2">
          Get access to your Orders,Wishlist and Recommendations
        </span>
      </div>
      <div>
        <form onSubmit={submit} className={"form"} data-test="sign-in">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              errorMessage(email, error) ? "Please enter Email." : null
            }
            type={"email"}
            required
            id="standard-basic"
            label="Email"
            data-test="email"
            error={errorMessage(email, error)}
            value ={email}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            helperText={
              errorMessage(password, error) ? "Please enter Password." : null
            }
            type="password"
            required
            id="standard-basic"
            label="Password"
            data-test="password"
            error={errorMessage(password, error)}
            value ={password}
          />
          <button onClick={handler} class="btn" type="submit" data-test='submitButton'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;