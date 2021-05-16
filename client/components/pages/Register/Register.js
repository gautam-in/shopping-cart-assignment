import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import FormField from "../../atoms/FormField/FormField";
import useForm from "../../customHooks/useForm";

function Register() {
  const history = useHistory();

  const { inputs, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPwBlurred, setConfirmPwBlurred] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    if (inputs.password === inputs.confirmPassword) {
      localStorage.setItem("userLoggedIn", true);
      history.push("/home");
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
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
          required
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
        <Button>Signup</Button>
      </form>
    </div>
  );
}

export default Register;
