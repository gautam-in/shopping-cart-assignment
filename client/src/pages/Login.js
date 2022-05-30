import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/login-slice";
import Notification from "../components/Notification";
import { toast } from "react-toastify";

import "./Login-signup.css";

function Login() {
  let dispatch = useDispatch();

  let userEmailRef = useRef();
  let passwordRef = useRef();

  let history = useHistory();

  let validateLoginCreds = (event) => {
    event.preventDefault();

    if (
      localStorage.getItem("userEmail") === userEmailRef.current.value.trim() &&
      localStorage.getItem("userPass") === passwordRef.current.value.trim()
    ) {
      dispatch(LoginActions.setisLoginStatus(true));
      history.replace("/Home");
    } else {
      // alert("username or password is incorrect");

      toast.error("username or password is incorrect", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className="main-container">
      <aside className="aside container">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations!</p>
      </aside>
      <main className="login-form container">
        <form onSubmit={validateLoginCreds}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            //placeholder="email"
            title="enter the email address here."
            required
            ref={userEmailRef}
            autoFocus
          />

          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            //placeholder="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            ref={passwordRef}
          />

          <input className="input" type="submit" value="Login" />
        </form>
      </main>
      <Notification></Notification>
    </section>
  );
}

export default Login;
