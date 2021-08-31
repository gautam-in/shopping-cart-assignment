import { useState } from "react";
import { useRouter } from "next/router";
import useForm from "../../../global/utils/useForm";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { Form, LoginFormHeading, LoginFormWrapper } from "./LoginForm.styles";

const LoginForm = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const { inputValues, handleChange } = useForm({
    initialFormValues: {
      email: "",
      password: "",
    },
  });
  const { email, password } = inputValues;

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter the email address.";
    } else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      error = "Please enter a valid email address.";
    } else {
      error = undefined;
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter a password.";
    } else {
      error = undefined;
    }
    return error;
  };

  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    let errorMessage;

    if (name === "email") {
      errorMessage = validateEmail(value);
    } else if (name === "password") {
      errorMessage = validatePassword(value);
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
    <LoginFormWrapper>
      <LoginFormHeading>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations.</p>
      </LoginFormHeading>
      <Form onSubmit={handleSubmit}>
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
          hasInput={!!password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleInputChange}
        />
        <Button
          id="submit"
          name="submit"
          disabled={!email || !password || isError()}
        >
          Login
        </Button>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
