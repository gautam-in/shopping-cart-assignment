import React, { useState } from "react";
import style from "./Signin.module.css";
import { Input } from "../common/Input/form-input";
import { Button } from "../common/Button/Button";
import { withRouter } from "react-router";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.history.push("/");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={style.signinContainer}>
      <div className={style.loginLeftSection}>
        <h2>Login</h2>
        <p>Get access to your orders, Wishlist and recommendation</p>
      </div>
      <form className={style.loginRightSection} onSubmit={formSubmitHandler}>
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
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
