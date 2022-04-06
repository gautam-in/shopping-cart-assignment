import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../UI/ButtonPrimary";
import Input from "../UI/Input";
import { userSignIn } from "../../actions/userSignIn";
import { useDispatch } from "react-redux";
import classes from "./Register.module.css";

function Register() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    setPassword: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onUserCreate = (e) => {
    e.preventDefault();
    var regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[^-\s](?=.{8,})/;
    var result = regexPassword.test(formState.setPassword);
    if (formState.setPassword !== formState.confirmPassword) {
      alert("Password and confirm password input should be same");
    } else if (!result) {
      alert(
        "Password should be 8 letter long with minimum 8 characters, a number and alphabet with no spaces"
      );
    } else {
      dispatch(userSignIn());
      history.push("/");
    }
  };

  const onFieldChange = (e) => {
    setFormState((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };
  return (
    <div className={classes["register-container"]}>
      <section className={classes["register-text"]}>
        <div>
          <h1>Sign Up</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </section>

      <form
        onSubmit={(e) => onUserCreate(e)}
        className={classes["registerBox-input"]}
      >
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          text="First Name"
          required={true}
          onChange={onFieldChange}
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          text="Last Name"
          required={true}
          onChange={onFieldChange}
        />
        <Input
          id="email"
          type="email"
          placeholder="Email"
          text="Email"
          required={true}
          onChange={onFieldChange}
        />
        <Input
          id="setPassword"
          type="password"
          placeholder="Set Password"
          text="Set Password"
          required={true}
          onChange={onFieldChange}
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          text="Confirm Password"
          required={true}
          onChange={onFieldChange}
        />
        <Button type="submit" className={classes["submit-button"]}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default Register;
