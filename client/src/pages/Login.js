import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/login-slice";
import "./Login-signup.css";

function Login() {
  let dispatch = useDispatch();

  let userEmailRef = useRef();
  let passwordRef = useRef();

  let history = useHistory();

  let validateLoginCres = (event) => {
    event.preventDefault();

    if (
      localStorage.getItem("userEmail") === userEmailRef.current.value.trim() &&
      localStorage.getItem("userPass") === passwordRef.current.value.trim()
    ) {
      dispatch(LoginActions.setisLoginStatus(true));
      history.replace("/Home");
    } else {
      alert("username or password is incorrect");
    }
  };

  return (
    <section className="main-container">
      <aside className="aside container">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations!</p>
      </aside>
      <main className="login-form container">
        <form onSubmit={validateLoginCres}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            ref={userEmailRef}
          />
          {/* {!isEmailValid && (
            <p className="inputErrorMessage">
              email can't be empty! please enter a valid name.
            </p>
          )} */}
          {/* <label htmlFor="password">Password</label> */}
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            ref={passwordRef}
          />

          <input className="input" type="submit" value="Login" />
        </form>
      </main>
    </section>
  );
}

export default Login;
