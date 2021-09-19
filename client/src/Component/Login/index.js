import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Auth.jsx";
import "./index.scss";

const SignIn = () => {
  const { toggleUserAuthentication } = useContext(AuthContext);
  const history = useHistory();
  
  const initialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const [validation, setValidation] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    var regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const email = localStorage.getItem("email");
    const pwd = localStorage.getItem("password");
    if (!email && !pwd) {
      setValidation("please register first");
    } else if (!pwd) {
      setValidation("please enter the password");
    } else if (!email) {
      setValidation("please enter the email");
    } else {
      if (
        userDetails.email.match(regex) &&
        userDetails.email.length > 1 &&
        userDetails.password.length > 6 &&
        userDetails.email === email &&
        userDetails.password === pwd
      ) {
        toggleUserAuthentication();
        localStorage.setItem("status", "logged-in");
        history.push("/");
      } else {
        setValidation("Invalid credentials");
      }
    }
  };

  return (
    <div className="sign-in">
      <aside>
        <h1> Login </h1>{" "}
        <p> Get access to your Orders, Wishlist and Recommendations </p>{" "}
      </aside>{" "}
      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <div class="form__group field">
            <input
              type="Email"
              className="form__field"
              placeholder="email"
              name="email"
              id="email"
              required
              value={userDetails.email}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  email: event.target.value,
                })
              }
            />{" "}
            <label className="form__label"> Email </label>{" "}
          </div>{" "}
          <div class="form__group field">
            <input
              type="password"
              className="form__field"
              placeholder="password"
              name="password"
              id="password"
              required
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  password: event.target.value,
                })
              }
            />{" "}
            <label className="form__label"> Password </label>{" "}
          </div>{" "}
          <p
            style={{
              color: "red",
              textAlign: "center",
            }}
          >
            {" "}
            {validation}{" "}
          </p>{" "}
          <button className="SignIn-btn"> Login </button>{" "}
        </form>{" "}
      </section>{" "}
    </div>
  );
};

export default SignIn;
