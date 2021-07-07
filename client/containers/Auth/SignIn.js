import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.scss";
import AuthContext from "../../AuthContext";

const SignIn = () => {
  const { toggleUserAuthentication } = useContext(AuthContext);
  const history = useHistory();
  const intialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(intialState);
  const [validation, setValidation] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = sessionStorage.getItem("email");
    const pwd = sessionStorage.getItem("password");
    if (userDetails.email === email && userDetails.password === pwd) {
      toggleUserAuthentication();
      sessionStorage.setItem("status", "logged-in");
      history.push("/");
    } else {
      setValidation("Invalid credentials");
    }
  };

  return (
    <div className="sign-in">
      <aside>
        <h1>SignIn</h1>
        <p>Get access to your orders, wishlist and recommedations</p>
      </aside>
      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="Email"
            value={userDetails.email}
            required
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
          />
          <input
            placeholder="Password"
            type="password"
            value={userDetails.password}
            required
            onChange={(event) =>
              setUserDetails({ ...userDetails, password: event.target.value })
            }
          />
          <p
            style={{
              color: "red",
              textAlign: "center",
            }}
          >
            {validation}
          </p>
          <button>SignIn</button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
