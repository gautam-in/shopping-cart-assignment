import { useState } from "react";
import { useRouter } from "next/router";
import useForm from "../../../global/utils/useForm";

import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import {
  Form,
  RegistrationFormHeading,
  RegistrationFormWrapper,
} from "./RegistrationForm.styles";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "./RegistrationForm.utils";

const RegistrationForm = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const { inputValues, handleChange } = useForm({
    initialFormValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { firstName, lastName, email, password, confirmPassword } = inputValues;

  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    let errorMessage;

    switch (name) {
      case "firstName":
      case "lastName": {
        errorMessage = validateName(value);
        break;
      }
      case "email": {
        errorMessage = validateEmail(value);
        break;
      }
      case "password": {
        errorMessage = validatePassword(value);
        break;
      }
      case "confirmPassword": {
        errorMessage = validateConfirmPassword(value, password);
        break;
      }
      default:
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const isError = () => {
    return Object.values(errors).find((value) => value && value !== undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = isError();
    if (!error) {
      router.push("/home");
    }
  };

  return (
    <RegistrationFormWrapper>
      <RegistrationFormHeading>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </RegistrationFormHeading>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          type="text"
          labelText="First name"
          error={errors.firstName}
          hasInput={!!firstName}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <TextField
          id="lastName"
          name="lastName"
          type="text"
          labelText="Last name"
          error={errors.lastName}
          hasInput={!!lastName}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          labelText="Email"
          error={errors.email}
          hasInput={!!email}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          labelText="Password"
          error={errors.password}
          hasInput={!!password}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          labelText="Confirm password"
          error={errors.confirmPassword}
          hasInput={!!confirmPassword}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <Button
          id="submit"
          name="submit"
          disabled={!email || !password || isError()}
        >
          Signup
        </Button>
      </Form>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
