import React from "react";
import WrapperText from "../../molecules/WrapperText/WrapperText";
import Form from "../../organisms/Form/Form";
import "./Register.scss";

export default function Register() {
  const inputLabel = [
    {
      type: "text",
      placeholder: "First Name",
      inputId: "firstName",
    },
    {
      type: "text",
      placeholder: "Last Name",
      inputId: "lastName",
    },
    
    {
      type: "email",
      placeholder: "Email",
      inputId: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      inputId: "password",
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      inputId: "confirmPassword",
    },
  ];

  return (
    <main className="register-container">
      <WrapperText
        className={"register-container__article"}
        title={"SignUp"}
        description={"We do not share your personal details"}
      />
      <Form
        inputLabel={inputLabel}
        button={"SignUp"}
        className={"register-container__form"}
      />
    </main>
  );
}
