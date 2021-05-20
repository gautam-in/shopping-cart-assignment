import React, { useState } from "react";
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
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  let rules = {
    firstName: ["required"],
    lastName: ["required"],
    email: ["required", emailRegex, "Please provide a valid email"],
    password: [
      "required",
      passwordRegex,
      "Passwords should consists 6-16 characters with atleast one alphabet, number and special character",
    ],
    confirmPassword: ["required"],
  };

  const { inputs, errors, handleChange } = useForm(initialState, rules);
  const [passwordMatchError, setpasswordMatchError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register called", inputs);
    if (inputs.password === inputs.confirmPassword) {
      localStorage.setItem("userLoggedIn", true);
      history.push("/");
    } else {
      setpasswordMatchError(true);
    }
  };

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
          errors={errors.firstName}
          required
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
          value={inputs.lastName}
          onChange={handleChange}
          errors={errors.lastName}
          required
        />
        <FormField
          label="Email"
          type="text"
          name="email"
          id="registerEmail"
          value={inputs.email}
          onChange={handleChange}
          errors={errors.email}
          required
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="registerPassword"
          value={inputs.password}
          onChange={handleChange}
          errors={errors.password}
          required
        />
        <FormField
          label="Confirm Password"
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
        <Button disabled={Object.keys(errors).length !== 0}>Signup</Button>
      </form>
    </div>
  );
}

export default Register;
