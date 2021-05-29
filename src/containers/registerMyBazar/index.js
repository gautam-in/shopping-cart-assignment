import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/common/button";
import Input from "../../components/common/input";

import "./index.scss";

import {
  registerTitleLabel,
  registerDescriptionLabel,
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  passwordLabel,
  confirmPasswordLabel,
  registerSubmitCtaLabel,
  // error msg label
  firstNameErrorLabel,
  lastNameErrorLabel,
  emailErrorLabel,
  passwordErrorLabel,
  confirmPasswordErrorLabel,
  emailInvaildErrorLabel,
  passwordInvaildErrorLabel,
} from "../../constant";

import { emailRegex, passwordRegex } from "../../constant/regex";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const history = useHistory();
  const [checkValidation, setCheckValidation] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // error checking
    const hasError = Object.values(form).some((item) => item.trim() === "");

    if (!hasError) {
      window.localStorage.setItem("user", JSON.stringify(form));
      setForm(INITIAL_FORM);
      history.push(`/home`);
    } else {
      setCheckValidation(true);
    }
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="register_form_container">
      <div className="sign_up_description">
        <h1 aria-label={registerTitleLabel}>{registerTitleLabel}</h1>
        <p aria-label={registerDescriptionLabel}>{registerDescriptionLabel}</p>
      </div>
      <div className="form_container">
        <form
          className="form "
          autoComplete="off"
          onSubmit={handleSubmit}
          method="POST"
          name="register"
        >
          <Input
            type="text"
            name="firstName"
            className="form-control"
            value={form.firstName}
            onChange={handleInputChange}
            autoFocus={true}
            label={firstNameLabel}
            checkValidation={checkValidation}
            errorLabel={firstNameErrorLabel}
          />
          <Input
            type="text"
            name="lastName"
            className="form-control"
            value={form.lastName}
            onChange={handleInputChange}
            label={lastNameLabel}
            checkValidation={checkValidation}
            errorLabel={lastNameErrorLabel}
          />
          <Input
            type="text"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleInputChange}
            label={emailLabel}
            errorLabel={emailErrorLabel}
            checkValidation={checkValidation}
            invalidErrorLabel={emailInvaildErrorLabel}
            regex={emailRegex}
          />
          <Input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleInputChange}
            autoComplete="new-password"
            label={passwordLabel}
            checkValidation={checkValidation}
            errorLabel={passwordErrorLabel}
            invalidErrorLabel={passwordInvaildErrorLabel}
            regex={passwordRegex}
          />
          <Input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={form.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
            checkValidation={checkValidation}
            label={confirmPasswordLabel}
            errorLabel={confirmPasswordErrorLabel}
          />
          <Button type="submit" variant="primary" className="btn-block">
            {registerSubmitCtaLabel}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
