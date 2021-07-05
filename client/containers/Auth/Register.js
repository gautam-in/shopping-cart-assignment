import React, { useState } from "react";
import "./Auth.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPwd: "",
  };
  const [userDetails, setUserDetails] = useState(intialState);
  const [validation, setValidation] = useState({
    statusErrorMessage: "",
    statusSuccessMessage: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userDetails.firstName && userDetails.email && userDetails.password) {
      if (userDetails.password === userDetails.confirmPwd) {
        sessionStorage.setItem(
          "name",
          userDetails.firstName + " " + userDetails.lastName
        );
        sessionStorage.setItem("email", userDetails.email);
        sessionStorage.setItem("password", userDetails.password);
        sessionStorage.setItem("status", "");
        setValidation({
          ...validation,
          statusSuccessMessage: "User registered successfully",
          statusErrorMessage: "",
        });
        setUserDetails(intialState);
        setTimeout(() => history.push("/login"), 2000);
      } else {
        setValidation({
          ...validation,
          statusErrorMessage: "Passwords do not match",
        });
      }
    } else {
      setValidation({
        ...validation,
        statusErrorMessage: "Please provide First name, Email & Password",
      });
    }
  };

  return (
    <div className="register">
      <aside>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone</p>
      </aside>
      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="First name"
            required
            value={userDetails.firstName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, firstName: event.target.value })
            }
          />
          <input
            placeholder="Last name"
            value={userDetails.lastName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, lastName: event.target.value })
            }
          />
          <input
            placeholder="Email"
            required
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
          />
          <input
            placeholder="Password"
            type="password"
            required
            value={userDetails.password}
            onChange={(event) =>
              setUserDetails({ ...userDetails, password: event.target.value })
            }
          />
          <input
            placeholder="Confirm Password"
            type="password"
            required
            value={userDetails.confirmPwd}
            onChange={(event) =>
              setUserDetails({ ...userDetails, confirmPwd: event.target.value })
            }
          />
          <p
            style={{
              color: validation.statusErrorMessage ? "red" : "green",
              textAlign: "center",
            }}
          >
            {validation.statusErrorMessage || validation.statusSuccessMessage}
          </p>
          <button>Sign up</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
