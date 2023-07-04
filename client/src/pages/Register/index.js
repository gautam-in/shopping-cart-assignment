import React, { useEffect, useReducer } from "react";
import TextInput from "../../components/TextInput";
import FormTemplateWrapper from "../../components/FormTemplateWrapper";
import { useUser } from "../../context/auth";
import Button from "../../components/Button";
import { validateEmail, validatePassword } from "../../utils/formutils";
import { useNavigate } from "react-router-dom";

const INPUT_FIELDS_INITIAL_STATE = {
  firstName: {
    key: "firstName",
    type: "text",
    label: "First Name",
    value: "",
    error: "",
    isValid: true,
  },
  lastName: {
    key: "lastName",
    type: "text",
    label: "Last Name",
    value: "",
    error: "",
    isValid: true,
  },
  email: {
    key: "email",
    type: "email",
    label: "Email",
    value: "",
    error: "",
    isValid: true,
  },
  password: {
    key: "password",
    type: "password",
    label: "Password",
    value: "",
    error: "",
    isValid: true,
  },
  confirmPassword: {
    key: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    value: "",
    error: "",
    isValid: true,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.key]: action.payload };
    default:
      return state;
  }
}

function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [credentials, dispatch] = useReducer(
    reducer,
    INPUT_FIELDS_INITIAL_STATE
  );

  useEffect(() => {
    document.title = "Create an account | Sabka Bazaar";
  }, []);

  const handleLogin = () => {
    let isValid = true;
    Object.keys(credentials).forEach((key) => {
      if (!credentials[key].isValid) {
        isValid = false;
      }
    });

    if (!isValid) return;

    login(credentials.email.value, credentials.password.value);
    navigate("/");
  };

  const handleEmailChange = (value) => {
    const email = validateEmail(value);

    const updatedEmail = { ...credentials.email, ...email };
    dispatch({ type: "UPDATE_FIELD", key: "email", payload: updatedEmail });
  };

  const handlePasswordChange = (input, value) => {
    let password = validatePassword(value);

    if (input.key === "confirmPassword") {
      if (credentials.password.value !== value) {
        password = { error: "Passwords do not match", isValid: false, value };
      } else {
        password = { value, error: "", isValid: true };
      }
    }
    const updatedPassword = { ...credentials[input.key], ...password };
    dispatch({
      type: "UPDATE_FIELD",
      key: input.key,
      payload: updatedPassword,
    });
  };

  const handleTextChange = (input, value) => {
    const updatedValue = { ...credentials[input.key], value };
    dispatch({
      type: "UPDATE_FIELD",
      key: input.key,
      payload: updatedValue,
    });
  };

  const handleChange = (input, value) => {
    if (input.type === "email") handleEmailChange(value);
    if (input.type === "text") handleTextChange(input, value);
    if (input.type === "password") handlePasswordChange(input, value);
  };

  return (
    <FormTemplateWrapper
      title={"Signup"}
      description={"We do not share your personal details with anyone"}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      {Object.values(credentials).map((input) => (
        <React.Fragment key={input.label}>
          <TextInput
            id={`login-form-${input.label}`}
            type={input.type}
            label={input.label}
            onChange={(e) => handleChange(input, e.target.value)}
            error={input.error}
          />
        </React.Fragment>
      ))}
      <Button type="submit">Register</Button>
    </FormTemplateWrapper>
  );
}

export default Login;
