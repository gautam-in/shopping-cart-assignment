import React from "react";
import AuthInfo from "../../components/auth-info/auth-info";
import LoginForm from "../../components/login-form/login-form";
import "./login.styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <AuthInfo
        heading="Login"
        subHeading="Get access to your Orders, Wishlist and Recommendations"
      />
      <LoginForm />
    </div>
  );
};

export default Login;
