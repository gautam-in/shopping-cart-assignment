import React from "react";
import Button from "../UI/ButtonPrimary";
import Input from "../UI/Input";
import classes from "./Login.module.css";

function Login() {
  const UserloggedIn = (e) => {
    e.preventDefault();
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
          id="email"
          type="email"
          placeholder="Email"
          text="Email"
          required={true}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          text="Password"
          required={true}
          minlength={6}
        />
        <Button type="submit" className={classes["submit-button"]}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
