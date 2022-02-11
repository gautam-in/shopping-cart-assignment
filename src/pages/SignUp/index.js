import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VALIDATION_PATTERN } from "../../util/commonUtil";
import Onboarding from "./onboarding";
let emailError, passwordError, cPasswordError;

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        passwordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric, no space)";
        setError(true);
      } else {
        passwordError = "";
        setError(false);
      }
    } else {
      passwordError = "";
      setError(false);
    }
    setPassword(pass);
  };

  const handleCPasswordChange = (e) => {
    const cpass = e.target.value;
    if (cpass.length > 0) {
      if (password !== cpass) {
        cPasswordError = "Password should match";
        setError(true);
      } else {
        cPasswordError = "";
        setError(false);
      }
    } else {
      cPasswordError = "";
      setError(false);
    }
    setConfirmPassword(cpass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    navigate(`/`);
  };

  const inputsList = [
    {
      placeholder: "First Name",
      type: "text",
      id: "txtFirstName",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      placeholder: "Last Name",
      type: "text",
      id: "txtLastName",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
    },
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
      emailError: passwordError,
    },
    {
      placeholder: "Confirm Password",
      type: "password",
      id: "txtCnfPwd",
      value: confirmPassword,
      onChange: handleCPasswordChange,
      error: error,
      emailError: cPasswordError,
    },
  ];

  return (
    <Onboarding
      heading="Signup"
      description="We do not share your personal details with anyone."
      inputsList={inputsList}
      handleSubmit={handleSubmit}
      btnContent="Signup"
    />
  );
}

export default SignUp;
