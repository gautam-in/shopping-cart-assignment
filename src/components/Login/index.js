import React, { useState } from "react";
import Button from "../UI/ButtonPrimary";
import Input from "../UI/Input";
import classes from "./Login.module.css";
import { userSignIn } from "../../actions/userSignIn";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState({
    Email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onFieldChange = (e) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const UserloggedIn = (e) => {
    e.preventDefault();
    var regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[^-\s](?=.{8,})/;
    var result = regexPassword.test(formState.password);
    if (!result) {
      alert(
        "Password should be 8 letter long with minimum 8 characters, a number and alphabet with no spaces"
      );
    } else {
      dispatch(userSignIn());
      history.push("/");
    }
  };

  return (
    <div className={classes["login-container"]}>
      <section className={classes["login-text"]}>
        <div>
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlists and Recommendations</span>
        </div>
      </section>
      <form onSubmit={(e) => UserloggedIn(e)} className={classes["input-box"]}>
        <Input
          id="Email"
          type="email"
          placeholder="Email"
          text="Email"
          required={true}
          onChange={onFieldChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          text="Password"
          required={true}
          minlength={8}
          onChange={onFieldChange}
        />
        <Button type="submit" className={classes["submit-button"]}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
