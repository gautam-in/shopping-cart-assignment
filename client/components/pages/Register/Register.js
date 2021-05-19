import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import useForm from "../../customHooks/useForm";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const history = useHistory();

  const { inputs, errors, handleChange } = useForm(
    initialState,
    Object.keys(initialState)
  );
  const [confirmPwBlurred, setConfirmPwBlurred] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [passwordMatchError, setpasswordMatchError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (inputs.password === inputs.confirmPassword) {
      /* setpasswordMatchError(false) */
      localStorage.setItem("userLoggedIn", true);
      history.push("/home");
    } else {
      setpasswordMatchError(true);
    }
  };

  const passwordStrengthValidation = (e) => {
    /* let strongRegex = new RegExp(passwordRegex) */
    /* return strongRegex.test(inputs.password); */
    /* if (strongRegex.test(inputs.password))
      console.log("validated strength", inputs.password);
    else console.log("Not validated strength", inputs.password); */
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  /*   const emailValidation = useCallback(() => {
    console.log("callback function");
    const emailExp = new RegExp(emailRegex);
    if (emailExp.test(inputs.email)) {
      return true;
    }
    return false;
  }, [inputs.email]); */
  const emailValidation = () => {
    console.log("Normal function");
    const emailExp = new RegExp(emailRegex);
    return emailExp.test(inputs.email);
  };

  useEffect(() => {
    console.log("useffect function");
    let a = emailValidation();
    console.log("sdhfjsfk", a);
    setEmailError(!a);
  }, [inputs.email]);

  useEffect(() => {
    passwordStrengthValidation();
  }, [inputs.password]);

  return (
    <div className="flexed login">
      <div>
        <h3>Signup </h3>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <form onSubmit={handleRegister}>
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          id="firstName"
          value={inputs.firstName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          value={inputs.lastName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          type="text"
          name="email"
          id="email"
          value={inputs.email}
          onChange={handleChange}
          required
          validate={!errors.includes("email") && emailError}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
          required
          validate
        />
        <FormField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={inputs.confirmPassword}
          onChange={handleChange}
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
        <Button disabled={errors.length !== 0 || emailError}>Signup</Button>
      </form>
    </div>
  );
}

export default React.memo(Register);
