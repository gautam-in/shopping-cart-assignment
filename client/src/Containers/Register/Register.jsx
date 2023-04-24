import React, { lazy, useState } from "react";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../../utils/Utilities";

const Header = lazy(() => import("../../Components/Common/Header/Header"));

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [cPasswordError, setCPasswordError] = useState(null);
  const [fNameError, setFNameError] = useState(null);
  const [lNameError, setLNameError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      password === cpassword &&
      fName !== "" &&
      lName !== ""
    ) {
      setEmailError(null);
      setPasswordError(null);
      setFNameError(null);
      setLNameError(null);
      setCPasswordError(null);
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    } else {
      if (!isValidEmail(email)) {
        setEmailError("Please Enter a valid Email ID");
      } else {
        setEmailError(null);
      }
      if (!isValidPassword(password)) {
        setPasswordError(
          "Password should be a combination of one capital letter, one lower case letter, one number, one special character and atleast 8 characters long"
        );
      } else {
        setPasswordError(null);
      }
      if (password !== cpassword) {
        setCPasswordError("password and confirm password does not match");
      }
      if (fName === "" || fName === null) {
        setFNameError("First Name is required");
      } else {
        setFNameError(null);
      }
      if (lName === "" || lName === null) {
        setLNameError("Last Name is required");
      } else {
        setLNameError(null);
      }
    }
  };

  return (
    <>
      <Header />
      <section className={`${styles.registerSection} pageSection`}>
        <div className={styles.titleBox}>
          <h1>Signup</h1>
          <span>We do not share your personal details with anyone.</span>
        </div>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            aria-label="First Name"
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />
          {fNameError && <span className={styles.errorMsg}>{fNameError}</span>}
          <input
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
            value={lName}
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />
          {lNameError && <span className={styles.errorMsg}>{lNameError}</span>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            aria-label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && <span className={styles.errorMsg}>{emailError}</span>}
          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && (
            <span className={styles.errorMsg}>{passwordError}</span>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            value={cpassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
          {cPasswordError && (
            <span className={styles.errorMsg}>{cPasswordError}</span>
          )}
          <button type="submit" className={styles.formCta}>
            Sign up
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
