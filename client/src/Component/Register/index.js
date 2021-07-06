import React, { useState } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPwd: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const [validation, setValidation] = useState({
    statusErrorMessage: "",
    statusSuccessMessage: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    var regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (userDetails.firstName && userDetails.lastName && userDetails.email &&userDetails.email.match(regex) && userDetails.password) {
      if (userDetails.password === userDetails.confirmPwd) {
        localStorage.setItem(
          "name",
          userDetails.firstName + " " + userDetails.lastName
        );
        localStorage.setItem("email", userDetails.email);
        localStorage.setItem("password", userDetails.password);
        localStorage.setItem("status", "");
        setValidation({
          ...validation,
          statusSuccessMessage: "User registered successfully",
          statusErrorMessage: "",
        });
        setUserDetails(initialState);
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
        statusErrorMessage: "Please provide name, Email & Password",
      });
    }
  };

  return (
    <div className="register">
      <aside>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </aside>
      <section className="register-form">
        <form onSubmit={onFormSubmit}>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="First Name"
              name="firstname"
              id="firstname"
              value={userDetails.firstName}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  firstName: event.target.value,
                })
              }
            />
            <label className="form__label">First Name</label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Last Name"
              name="lastname"
              id="lastname"
              value={userDetails.lastName}
              onChange={(event) =>
                setUserDetails({ ...userDetails, lastName: event.target.value })
              }
            />
            <label className="form__label">Last Name</label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={(event) =>
                setUserDetails({ ...userDetails, email: event.target.value })
              }
            />
            <label className="form__label">Email</label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Password"
              name="password"
              id="password"
              value={userDetails.password}
              onChange={(event) =>
                setUserDetails({ ...userDetails, password: event.target.value })
              }
            />
            <label className="form__label">Password</label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Confirm Password"
              name="confirmpassword"
              id="confirmpassword"
              value={userDetails.confirmPwd}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  confirmPwd: event.target.value,
                })
              }
            />
            <label className="form__label">Confirm Password</label>
          </div>
          <p
            style={{
              color: validation.statusErrorMessage ? "red" : "green",
              textAlign: "center",
            }}
          >
            {validation.statusErrorMessage || validation.statusSuccessMessage}
          </p>
          <button className="SignUp-btn">Signup</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
