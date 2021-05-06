import React, { Fragment, useState } from "react";

import Header from "../../components/header";
import Button from "../../components/common/button";
import Input from "../../components/common/input";

import "./index.scss";

import label from "./data/index.json";

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

    // email validation
    if (form.email.match(label.services.constants.emailRegex)) {
      formErrors.email = "";
    } else {
      formErrors.email = "Invalid Email!";
    }

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
    <Fragment>
      <Header />
      <div className="login_form_container">
        <div className="login_description">
          <h1>{label.title}</h1>
          <p>{label.description}</p>
        </div>
        <div className="form_container">
          <form
            className="form "
            autoComplete={false}
            onSubmit={handleSubmit}
            name="login"
          >
            <Input
              type="text"
              name="email"
              className={`${error.email ? "error" : ""}`}
              required
              value={form.email}
              onChange={handleInputChange}
              label={label.emailLabel}
              errorLabel={error.email}
            />
            <Input
              type="password"
              name="password"
              className="form-control"
              required
              value={form.password}
              onChange={handleInputChange}
              label={label.passwordLabel}
            />
            <Button type="submit" variant="primary" className="btn-block">
              {label.submitButtonLabel}
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginMyBazar;
