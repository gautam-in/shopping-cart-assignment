import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.scss";

const SignIn = () => {
  const history = useHistory();
  const intialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(intialState);
  const [validation, setValidation] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const pwd = localStorage.getItem("password");
    if (userDetails.email === email && userDetails.password === pwd) {
      localStorage.setItem("isAuthenticated", true);
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
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
          />
          <input
            placeholder="Password"
            value={userDetails.password}
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
