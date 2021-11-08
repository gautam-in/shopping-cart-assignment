import React, { useState } from "react";
import style from "./Register.module.css";
import { Input } from "../common/Input/form-input";
import { Button } from "../common/Button/Button";
import { withRouter } from "react-router";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password and Confirm password should be same");
    } else if (error) {
      return;
    } else {
      setError("");
    }
    props.history.push("/");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setlastName(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const passwordValidation = (input) => {
    let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    let isValid = regex.test(input);
    if (!isValid || input.length < 6) {
      setError("Password should be Alpha Numeric and minimum 6 characters");
    } else {
      setError("");
    }
  };
  return (
    <div className={style.signinContainer}>
      <div className={style.loginLeftSection}>
        <h2>Signup</h2>
        <p>We do not share your profile with anyone</p>
      </div>
      <form className={style.loginRightSection} onSubmit={formSubmitHandler}>
        <Input
          label="First Name"
          name="firstName"
          type="text"
          onChange={firstNameHandler}
          value={firstName}
          required
        />
        <Input
          label="Last Name"
          name="lastName"
          type="text"
          onChange={lastNameHandler}
          value={lastName}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={emailHandler}
          value={email}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={passwordHandler}
          value={password}
          onBlur={() => passwordValidation(password)}
          required
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={confirmPasswordHandler}
          onBlur={() => passwordValidation(confirmPassword)}
          value={confirmPassword}
          required
        />
        {error ? <p className={style.error}>{error}</p> : null}

        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default withRouter(Register);
