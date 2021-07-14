import React, { useState } from "react";
import { useHistory } from "react-router";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "RegisterFormButtonComponent" */ "../Button")
);
const FormInput = React.lazy(() =>
  import(
    /* webpackChunkName: "RegisterFormFormInputComponent" */ "../FormInput"
  )
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "RegisterFormTextComponent" */ "../Text")
);

import { registerFormValidation } from "../../utils/formValidation";

import "./style.scss";

const RegisterForm = () => {
  const history = useHistory();
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formValidate = () => {
    const { errors, isFormValid } = registerFormValidation(registerFormData);
    setRegisterFormData((prevState) => ({
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
    <section className="register-section">
      <div className="register-section__left">
        <Text className="register-section__left__title">Signup</Text>
        <Text className="register-section__left__description">
          We do not share your personal details with anyone.
        </Text>
      </div>
      <div className="register-section__right">
        <form
          aria-label="This is the register form for users to register"
          className="register-section__right__form"
          onSubmit={submitHandler}
          role="form"
          tabIndex="0"
        >
          <FormInput
            ariaLabel="Enter your first name"
            error={registerFormData.errors.firstName}
            htmlFor="firstNameInput"
            label="First Name"
            name="firstName"
            onChange={changeHandler}
            role="textbox"
            tabIndex="0"
            type="text"
            value={registerFormData.firstName}
          />
          <FormInput
            ariaLabel="Enter your last name"
            error={registerFormData.errors.lastName}
            htmlFor="lastNameInput"
            label="Last Name"
            name="lastName"
            onChange={changeHandler}
            role="textbox"
            tabIndex="0"
            type="text"
            value={registerFormData.lastName}
          />
          <FormInput
            ariaLabel="Enter your email address"
            error={registerFormData.errors.email}
            htmlFor="emailInput"
            label="Email"
            name="email"
            onChange={changeHandler}
            role="textbox"
            tabIndex="12"
            type="text"
            value={registerFormData.email}
          />
          <FormInput
            ariaLabel="Enter password"
            error={registerFormData.errors.password}
            htmlFor="passwordInput"
            label="Password"
            name="password"
            onChange={changeHandler}
            role="textbox"
            tabIndex="0"
            type="password"
            value={registerFormData.password}
          />
          <FormInput
            ariaLabel="Enter confirm password"
            error={registerFormData.errors.confirmPassword}
            htmlFor="confirmPasswordInput"
            label="Confirm Password"
            name="confirmPassword"
            onChange={changeHandler}
            role="textbox"
            tabIndex="0"
            type="password"
            value={registerFormData.confirmPassword}
          />
          <Button
            ariaLabel="Signup Button"
            role="button"
            tabIndex="0"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
