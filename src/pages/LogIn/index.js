import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VALIDATION_PATTERN } from "../../util/commonUtil";
import Onboarding from "../SignUp/onboarding";
let emailError, PasswordError;

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const mail = e.target.value;
    if (mail.length > 0) {
      if (!VALIDATION_PATTERN.email.test(mail)) {
        emailError = "Please add valid email (contains @)";
        setError(true);
      } else {
        emailError = "";
        setError(false);
      }
    } else {
      emailError = "";
      setError(false);
    }
    setEmail(mail);
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    if (pass.length > 0) {
      if (!VALIDATION_PATTERN.password.test(pass)) {
        PasswordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric, no space)";
        setError(true);
      } else {
        PasswordError = "";
        setError(false);
      }
    } else {
      PasswordError = "";
      setError(false);
    }
    setPassword(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    navigate(`/`);
  };

  const inputsList = [
    {
      placeholder: "Email",
      type: "text",
      id: "txtEmail",
      value: email,
      onChange: handleEmailChange,
      error: error,
      emailError: emailError,
    },
    {
      placeholder: "Password",
      type: "password",
      id: "txtPassword",
      value: password,
      onChange: handlePasswordChange,
      error: error,
      emailError: PasswordError,
    },
  ];

  return (
    <Onboarding
      heading="Login"
      description="Get access to your Orders, Wishlist and Recommendations."
      inputsList={inputsList}
      handleSubmit={handleSubmit}
      btnContent="Log In"
    />
  );
}

export default LogIn;
