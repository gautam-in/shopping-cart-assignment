import React from "react";
import AuthInfo from "../../components/auth-info/auth-info";
import RegisterForm from "../../components/register-form/register-form";
import "./register.styles.css";

const Register = () => {
  return (
    <div className="register-container">
      <AuthInfo
        heading="Signup"
        subHeading="We do not share your personal details with anyone"
      />
      <RegisterForm />
    </div>
  );
};

export default Register;
