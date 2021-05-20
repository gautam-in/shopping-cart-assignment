import React, { useState } from "react";

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
} from "../../constant";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState(INITIAL_FORM);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = { ...INITIAL_FORM };

    if (form.firstName !== "" && form.firstName !== void 0) {
      formErrors.firstName = "";
    } else {
      formErrors.firstName = "Invalid Name";
    }

    // // email validation
    // if (form.email.match(label.services.constants.emailRegex)) {
    //   formErrors.email = "";
    // } else {
    //   formErrors.email = "Invalid Email!";
    // }

    // // password validation
    // if (form.password === form.confirmPassword) {
    //   formErrors.confirmPassword = "";
    // } else {
    //   formErrors.confirmPassword = "Passwords don't match!. Try again";
    // }

    // error checking
    const hasError = Object.values(formErrors).every(
      (item) => item.trim() === ""
    );
    if (!hasError) {
      setError({ ...formErrors });
      return;
    }
    window.localStorage.setItem("user", JSON.stringify(form));
    setError(INITIAL_FORM);
    setForm(INITIAL_FORM);
    formErrors = { ...INITIAL_FORM };
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
            errorLabel={"First Name Can not be empty"}
          />
          <Input
            type="text"
            name="lastName"
            className="form-control"
            value={form.lastName}
            onChange={handleInputChange}
            label={lastNameLabel}
          />
          <Input
            type="text"
            name="email"
            className={`${error.email ? "error" : ""}`}
            value={form.email}
            onChange={handleInputChange}
            label={emailLabel}
            errorLabel={error.email}
          />
          <Input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleInputChange}
            autoComplete="new-password"
            label={passwordLabel}
          />
          <Input
            type="password"
            name="confirmPassword"
            className={`${error.confirmPassword ? "error" : ""}`}
            value={form.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
            label={confirmPasswordLabel}
            errorLabel={error.confirmPassword}
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
