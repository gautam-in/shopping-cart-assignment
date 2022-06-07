import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { updateAuthStatus } from "../../redux/Auth/AuthActions";

function Register() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    if (!fname || !lname || !username || !password || !cpassword) {
      setErrorMessage("All Fields Are Mandatory");
      return;
    }
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegEx.test(username)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    const regEx = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!regEx.test(password)) {
      setErrorMessage(
        "Password must contain 1 character, 1 alphabet & Must be atleast 6 characters long"
      );
      return;
    }
    if (password !== cpassword) {
      setErrorMessage("Passwords Don't Match");
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_MAIN_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${fname} ${lname}`,
        username,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      dispatch(updateAuthStatus(true));
      localStorage.setItem("token", data.user);
      history.push("/");
    } else {
      setErrorMessage(data?.message);
    }
  };

  return auth ? (
    <Redirect to="/" />
  ) : (
    <div className="login-screen-container">
      <div className="login-screen-title-container">
        <h3>Sign up</h3>
        <span>We do not share your personal detaiils with anyone</span>
      </div>
      <div className="login-form-container">
        {errorMessage && <span>{errorMessage}</span>}
        <form onSubmit={registerUser} className="login-form">
          <div className="form-group">
            <input
              id="inputFname"
              type="text"
              value={fname}
              onChange={(e) => {
                setFName(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="inputFname">First Name</label>
          </div>
          <div className="form-group">
            <input
              id="inputLname"
              type="text"
              value={lname}
              onChange={(e) => {
                setLName(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="inputLname">Last Name</label>
          </div>
          <div className="form-group">
            <input
              id="inputEmail"
              type="email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="inputEmail">Email</label>
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
          <div className="form-group">
            <input
              id="inputCpass"
              type="password"
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
                if (errorMessage) {
                  setErrorMessage("");
                }
              }}
            />
            <label htmlFor="inputCpass">Confirm Password</label>
          </div>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default Register;
