import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "LoginFormButtonComponent" */ "../Button")
);
const FormInput = React.lazy(() =>
  import(/* webpackChunkName: "LoginFormFormInputComponent" */ "../FormInput")
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "LoginFormTextComponent" */ "../Text")
);

import { loginFormValidation } from "../../utils/formValidation";

import { loginUser } from "../../redux/actions/userActions";

import "./style.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
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
      dispatch(
        loginUser({
          email: loginFormData.email,
        })
      );
      history.push("/");
    }
  };
  return (
    <section className="login-section">
      <div className="login-section__left">
        <Text className="login-section__left__title">Login</Text>
        <Text className="login-section__left__description">
          Get access to your Orders, Wishlist and Recommendations
        </Text>
      </div>
      <div className="login-section__right">
        <form
          aria-label="This is the login form for users to log into sabka bazaar"
          className="login-section__right__form"
          onSubmit={submitHandler}
          role="form"
          tabIndex="0"
        >
          <FormInput
            ariaLabel="Enter your email address"
            error={loginFormData.errors.email}
            htmlFor="emailInput"
            label="Email"
            name="email"
            onChange={changeHandler}
            role="textbox"
            tabIndex="0"
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
            role="textbox"
            tabIndex="0"
            type="password"
            value={loginFormData.password}
          />
          <Button
            ariaLabel="Login Button"
            role="button"
            tabIndex="0"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
