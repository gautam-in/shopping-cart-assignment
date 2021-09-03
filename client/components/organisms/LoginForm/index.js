import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import useForm from "../../../global/utils/useForm";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import { Form, LoginFormHeading, LoginFormWrapper } from "./LoginForm.styles";
import { SectionWrapper } from "../../atoms/SectionWrapper/SectionWrapper.styles";
import { validateEmail, validatePassword } from "./LoginForm.utils";

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

  const handleInputChange = useCallback((e) => {
    handleChange(e);
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    e.target.value = trimmedValue;
    let errorMessage;

    if (name === "email") {
      errorMessage = validateEmail(trimmedValue);
    } else if (name === "password") {
      errorMessage = validatePassword(trimmedValue);
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  });

  const isError = useCallback(() => {
    return Object.values(errors).find((value) => value && value !== undefined);
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const error = isError();
    if (!error) {
      router.push("/home");
    }
  });

  return (
    <SectionWrapper>
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
            name="Login"
            type="submit"
            disabled={!email || !password || isError()}
          >
            Login
          </Button>
        </Form>
      </LoginFormWrapper>
    </SectionWrapper>
  );
};

export default LoginForm;
