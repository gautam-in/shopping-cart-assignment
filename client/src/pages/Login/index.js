import React, { useEffect, useReducer } from "react";
import TextInput from "../../components/TextInput";
import FormTemplateWrapper from "../../components/FormTemplateWrapper";
import { useUser } from "../../context/auth";
import Button from "../../components/Button";
import { validateEmail } from "../../utils/formutils";
import { useNavigate } from "react-router-dom";

const INPUT_FIELDS_INITIAL_STATE = {
  email: {
    type: "email",
    label: "Email",
    value: "",
    error: "",
    isValid: true,
  },
  password: {
    type: "password",
    label: "Password",
    value: "",
    error: "",
    isValid: true,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
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
    document.title = "Login Page | Sabka Bazaar";
  }, []);

  const handleLogin = () => {
    let isValid = true;
    Object.keys(credentials).forEach((key) => {
      if (!credentials[key].isValid || !credentials[key].value) {
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
    dispatch({ type: "UPDATE_EMAIL", payload: updatedEmail });
  };

  const handlePasswordChange = (value) => {
    let password = { value, error: "", isValid: true };
    if (value === "") {
      password = {
        ...password,
        error: "Password cannot be empty",
        isValid: false,
      };
    }
    const updatedPassword = { ...credentials.password, ...password };
    dispatch({ type: "UPDATE_PASSWORD", payload: updatedPassword });
  };

  const handleChange = (input, value) => {
    if (input.type === "email") handleEmailChange(value);
    if (input.type === "password") handlePasswordChange(value);
  };

  return (
    <FormTemplateWrapper
      title={"Login"}
      description={"Get access to your Orders, Wishlist and Recommendations"}
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
      <Button type="submit">Login</Button>
    </FormTemplateWrapper>
  );
}

export default Login;
