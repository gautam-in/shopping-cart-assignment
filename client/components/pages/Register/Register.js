import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import useForm from "../../../customHooks/useForm";
import {
  emailRegex,
  passwordRegex,
  emailRegexError,
  RegisterPasswordRegexError,
  RegisterFirstNameLabel,
  RegisterLastNameLabel,
  RegisterEmailLabel,
  RegisterPasswordLabel,
  RegisterConfirmPasswordLabel,
  RegisterButton,
} from "../../../constant";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const history = useHistory();

  const rules = {
    firstName: ["required"],
    lastName: ["required"],
    email: ["required", emailRegex, emailRegexError],
    password: ["required", passwordRegex, RegisterPasswordRegexError],
    confirmPassword: ["required"],
  };

  const { inputs, errors, handleChange } = useForm(initialState, rules);
  const [passwordMatchError, setpasswordMatchError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length !== 0) return;
    if (inputs.password !== inputs.confirmPassword) {
      setpasswordMatchError(true);
      return;
    }

    localStorage.setItem("userLoggedIn", true);
    history.push("/");
  };

  return (
    <div className="flexed login">
      <div>
        <h1>Signup </h1>
        <h2>We do not share your personal details with anyone.</h2>
      </div>
      <form onSubmit={handleRegister} method="POST">
        <FormField
          label={RegisterFirstNameLabel}
          type="text"
          name="firstName"
          id="firstName"
          value={inputs.firstName}
          onChange={handleChange}
          errors={errors.firstName}
          required
        />
        <FormField
          label={RegisterLastNameLabel}
          type="text"
          name="lastName"
          id="lastName"
          value={inputs.lastName}
          onChange={handleChange}
          errors={errors.lastName}
          required
        />
        <FormField
          label={RegisterEmailLabel}
          type="text"
          name="email"
          id="registerEmail"
          value={inputs.email}
          onChange={handleChange}
          errors={errors.email}
          required
        />
        <FormField
          label={RegisterPasswordLabel}
          type="password"
          name="password"
          id="registerPassword"
          value={inputs.password}
          onChange={handleChange}
          errors={errors.password}
          required
        />
        <FormField
          label={RegisterConfirmPasswordLabel}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={inputs.confirmPassword}
          onChange={handleChange}
          errors={errors.confirmPassword}
          required
        />
        {passwordMatchError && (
          <span
            className="form_error"
            style={{ marginBottom: "10px" }}
            aria-label={"Passwords don't match"}
            aria-live="assertive"
          >
            Passwords don't match
          </span>
        )}
        <Button
        //disabled={Object.keys(errors).length !== 0}
        >
          {RegisterButton}
        </Button>
      </form>
    </div>
  );
}

export default Register;
