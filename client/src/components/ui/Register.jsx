import React, { useState } from "react";
import {
  validateEmail,
  checkOnlyLetters,
  vaildatePassword,
} from "../../util/Util";

function Register() {
  const [localState, setLocalState] = useState({
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  });

  //  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setLocalState((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!vaidateFormData(localState)) return;
    let credList = [];
    let found = false;
    if (localStorage.getItem("cred") !== null) {
      credList = JSON.parse(localStorage.getItem("cred"));
      credList.forEach((creditional) => {
        if (creditional.email === localState.email) {
          found = true;
          return;
        }
      });
    }
    if (found === false)
      credList.push({
        firstName: localState.firstName,
        lastName: localState.lastName,
        email: localState.email,
        password: localState.password,
      });

    localStorage.setItem("cred", JSON.stringify(credList));
    if (found === true) alert("Already Registered !!");
    else alert(`Registered Sucessfully !!`);
    setLocalState({
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
    });
  };

  const vaidateFormData = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    let vaild = true;
    if (!validateEmail(email)) {
      vaild = false;
      setLocalState((prevState) => {
        return { ...prevState, emailError: "ENTER VAILD EMAIL" };
      });
    } else
      setLocalState((prevState) => {
        return { ...prevState, emailError: "" };
      });

    if (!checkOnlyLetters(firstName)) {
      vaild = false;
      setLocalState((prevState) => {
        return { ...prevState, firstNameError: "ENTER VAILD FIRST NAME" };
      });
    } else
      setLocalState((prevState) => {
        return { ...prevState, firstNameError: "" };
      });

    if (!checkOnlyLetters(lastName)) {
      vaild = false;
      setLocalState((prevState) => {
        return { ...prevState, lastNameError: "ENTER VAILD LAST NAME" };
      });
    } else
      setLocalState((prevState) => {
        return { ...prevState, lastNameError: "" };
      });
    if (!vaildatePassword(password)) {
      vaild = false;
      setLocalState((prevState) => {
        return {
          ...prevState,
          passwordError:
            "Password must be a minimum of 8 characters including number, Upper, Lower And one special character",
        };
      });
    } else
      setLocalState((prevState) => {
        return {
          ...prevState,
          passwordError: "",
        };
      });
    if (password !== confirmPassword) {
      vaild = false;
      setLocalState((prevState) => {
        return {
          ...prevState,
          confirmPasswordError:
            "ENTERED PASSWORD AND CONFIRM PASSWORD NOT MATCHED",
        };
      });
    } else
      setLocalState((prevState) => {
        return {
          ...prevState,
          confirmPasswordError: "",
        };
      });

    return vaild;
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Signup</p>
        <p style={{ fontSize: "1.5rem" }}>
          We do not share your personal details with anyone
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={localState.firstName}
            style={{
              borderBottom: localState.firstNameError && "2px solid red",
            }}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.firstNameError}</small>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={localState.lastName}
            style={{
              borderBottom: localState.lastNameError && "2px solid red",
            }}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.lastNameError}</small>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={localState.email}
            style={{
              borderBottom: localState.emailError && "2px solid red",
            }}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.emailError}</small>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={localState.password}
            style={{
              borderBottom: localState.passwordError && "2px solid red",
            }}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.passwordError}</small>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={localState.confirmPassword}
            style={{
              borderBottom: localState.confirmPasswordError && "2px solid red",
            }}
            onChange={handleChange}
            required
          />
          <small className="error-message">
            {localState.confirmPasswordError}
          </small>
          <button className="button">Login</button>
        </form>
      </div>
    </>
  );
}

export default Register;
