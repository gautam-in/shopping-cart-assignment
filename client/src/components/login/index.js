import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./index.scss";
function Login() {
  const history = useHistory();

  function submit(e) {
    e.preventDefault();

    history.push("home");
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
        <form onSubmit={submit} className={"form"}>
          <TextField
            type={"email"}
            required
            id="standard-basic"
            label="Email"
          />
          <TextField
            type="password"
            required
            id="standard-basic"
            label="Password"
          />
          <button class="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
