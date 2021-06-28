import React, { useState } from "react";
import { useHistory } from "react-router";

import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Text from "../../components/Text";

import { loginFormValidation } from "../../utils/formValidation";

import "./style.scss";

const LoginForm = () => {
  const history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formValidate = () => {
    const { errors, isFormValid } = loginFormValidation(loginFormData);
    setLoginFormData((prevState) => ({
      ...prevState,
      errors: errors,
    }));
    return isFormValid;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidate()) {
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
            aria-label="This is the login form for users to log in"
            className="login-section__right__form"
            onSubmit={submitHandler}
            tabIndex="9"
          >
            <FormInput
              ariaLabel="Enter your email address"
              error={loginFormData.errors.email}
              htmlFor="emailInput"
              label="Email"
              name="email"
              onChange={changeHandler}
              tabIndex="10"
              type="email"
              value={loginFormData.email}
            />
            <FormInput
              ariaLabel="Enter your password"
              error={loginFormData.errors.password}
              htmlFor="passwordInput"
              label="Password"
              name="password"
              onChange={changeHandler}
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
