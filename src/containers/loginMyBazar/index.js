import React, { useState } from "react";

import Button from "../../components/common/button";
import Input from "../../components/common/input";

import "./index.scss";

import {
  loginTitleLabel,
  loginDescriptionLabel,
  loginSubmitCtaLabel,
  emailLabel,
  passwordLabel,
  // error msg label
  emailErrorLabel,
  passwordErrorLabel,
  emailInvaildErrorLabel,
  passwordInvaildErrorLabel,
} from "../../constant";

import { emailRegex, passwordRegex } from "../../constant/regex";

const INITIAL_FORM = {
  email: "",
  password: "",
};
const LoginMyBazar = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState(INITIAL_FORM);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = { ...INITIAL_FORM };

    // // error checking
    // const hasError = Object.values(formErrors).every(
    //   (item) => item.trim() === ""
    // );
    // if (!hasError) {
    //   setError({ ...formErrors });
    //   return;
    // }
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
    <div className="login_form_container">
      <div className="login_description">
        <h1>{loginTitleLabel}</h1>
        <p>{loginDescriptionLabel}</p>
      </div>
      <div className="form_container">
        <form className="form " onSubmit={handleSubmit} name="login">
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
            label={passwordLabel}
            errorLabel={passwordErrorLabel}
            invalidErrorLabel={passwordInvaildErrorLabel}
            regex={passwordRegex}
          />
          <Button type="submit" variant="primary" className="btn-block">
            {loginSubmitCtaLabel}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginMyBazar;
