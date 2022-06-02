import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/login-slice";

import { useHistory } from "react-router-dom";
import "./Login-signup.css";

function Signup() {
  let dispatch = useDispatch();

  let passwordRef = useRef();
  let cpasswordRef = useRef();
  let userEmail = useRef();

  let history = useHistory();

  let [isPassMatching, setisPassMatching] = useState(false);

  useEffect(() => {
    setisPassMatching(true);
  }, []);

  let validateSignUp = (event) => {
    event.preventDefault();
    let password = passwordRef.current.value;
    let cpassword = cpasswordRef.current.value;

    if (password.trim() !== cpassword.trim()) {
      setisPassMatching(false);
      return;
    }
    setisPassMatching(true);

    localStorage.setItem("userEmail", userEmail.current.value.trim());
    localStorage.setItem("userPass", passwordRef.current.value.trim());
    dispatch(LoginActions.setisLoginStatus(true));
    history.replace("/Home");
  };

  return (
    <section className="main-container">
      <aside className="aside signup-container">
        <h1>Sign-up</h1>
        <p>Get access to your Orders, Wishlist and Recommendations!</p>
      </aside>
      <main className="login-form signup-container">
        <form onSubmit={validateSignUp}>
          <label htmlFor="fname">First Name</label>
          <input
            className="input"
            type="text"
            name="fname"
            id="fname"
            //placeholder="First Name"
            title="enter the first name here."
            required
            autoFocus
          />
          <label htmlFor="lname">Last Name</label>
          <input
            className="input"
            type="text"
            name="lname"
            id="lname"
            title="enter the last name here."

            //placeholder="Last Name"
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            //placeholder="email"
            title="enter the email address here."
            required
            ref={userEmail}
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

          <label htmlFor="cpassword">Confirm Password</label>
          <input
            className="input"
            type="password"
            name="cpassword"
            id="cpassword"
            //placeholder="confirm password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            ref={cpasswordRef}
          />

          {!isPassMatching && (
            <p className="inputErrorMessage">
              password and confirm password does not match!
            </p>
          )}
          <input className="input" type="submit" value="Sign-up" />
        </form>
      </main>
    </section>
  );
}

export default Signup;
