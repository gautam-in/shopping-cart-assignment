import React, { useState } from "react";
import { useHistory } from "react-router";

import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Text from "../../components/Text";

import "./style.scss";

const LoginForm = () => {
  const history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = loginFormData;
    if (email && password) {
      history.push("/");
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="login-section__left">
          <Text
            ariaLabel="Login Title"
            className="login-section__left__title"
            tabIndex="7"
          >
            Login
          </Text>
          <Text
            ariaLabel="Get access to your orders, wishlist and recommendations by login with your credentials in this login webpage"
            className="login-section__left__description"
            tabIndex="8"
          >
            Get access to your Orders, Wishlist and Recommendations
          </Text>
        </div>
        <div className="login-section__right">
          <form
            aria-label="This is the login form for user to log in"
            className="login-section__right__form"
            onSubmit={submitHandler}
            tabIndex="9"
          >
            <FormInput
              ariaLabel="Enter your email address"
              htmlFor="emailInput"
              label="Email"
              name="email"
              onChange={changeHandler}
              required
              tabIndex="10"
              type="email"
              value={loginFormData.email}
            />
            <FormInput
              ariaLabel="Enter your password"
              htmlFor="passwordInput"
              label="Password"
              name="password"
              onChange={changeHandler}
              required
              tabIndex="11"
              type="password"
              value={loginFormData.password}
            />
            <Button ariaLabel="Login Button" tabIndex="12" type="submit">
              Login
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
