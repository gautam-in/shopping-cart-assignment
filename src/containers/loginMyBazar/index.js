import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [form, setForm] = useState(INITIAL_FORM);
  const [checkValidation, setCheckValidation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // error checking
    const hasError = Object.values(form).some((item) => item.trim() === "");

    if (!hasError) {
      const user = window.localStorage.getItem("user");
      if (user && JSON.parse(user)) {
        setForm(INITIAL_FORM);
        history.push(`/home`);
      }
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
    <div className="login_form_container">
      <div className="login_description">
        <h1>{loginTitleLabel}</h1>
        <p>{loginDescriptionLabel}</p>
      </div>
      <div className="form_container">
        <form
          className="form "
          method="post"
          onSubmit={handleSubmit}
          name="login"
        >
          <Input
            type="text"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleInputChange}
            label={emailLabel}
            errorLabel={emailErrorLabel}
            invalidErrorLabel={emailInvaildErrorLabel}
            checkValidation={checkValidation}
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
            checkValidation={checkValidation}
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
