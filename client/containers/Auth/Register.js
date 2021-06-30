import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
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
    if (userDetails.password === userDetails.confirmPwd) {
      localStorage.setItem(
        "name",
        userDetails.firstName + " " + userDetails.lastName
      );
      localStorage.setItem("email", userDetails.email);
      localStorage.setItem("password", userDetails.password);
      setValidation({
        ...validation,
        statusSuccessMessage: "User Registered successfully",
        statusErrorMessage: "",
      });
      setUserDetails(intialState);
    } else {
      setValidation({
        ...validation,
        statusErrorMessage: "Passwords do not match",
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
          <input
            placeholder="Confirm Password"
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
          <button>SignUp</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
