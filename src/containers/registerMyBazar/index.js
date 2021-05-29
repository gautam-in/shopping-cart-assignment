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
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState(INITIAL_FORM);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = { ...INITIAL_FORM };

    // error checking
    const hasError = Object.values(form).every((item) => item.trim() === "");
    // if (!hasError) {
    //   setError({ ...formErrors });
    //   return;
    // }
    window.localStorage.setItem("user", JSON.stringify(form));
    setError(INITIAL_FORM);
    setForm(INITIAL_FORM);
    formErrors = { ...INITIAL_FORM };
    !hasError && history.push(`/home`);
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
            errorLabel={firstNameErrorLabel}
          />
          <Input
            type="text"
            name="lastName"
            className="form-control"
            value={form.lastName}
            onChange={handleInputChange}
            label={lastNameLabel}
            errorLabel={lastNameErrorLabel}
          />
          <Input
            type="text"
            name="email"
            className={`${error.email ? "error" : ""}`}
            value={form.email}
            onChange={handleInputChange}
            label={emailLabel}
            errorLabel={emailErrorLabel}
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
            errorLabel={passwordErrorLabel}
            invalidErrorLabel={passwordInvaildErrorLabel}
            regex={passwordRegex}
          />
          <Input
            type="password"
            name="confirmPassword"
            className={`${error.confirmPassword ? "error" : ""}`}
            value={form.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
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
