import React from "react";
import SignInForm from "../comps/signIn";

import Footer from "./footer";
import "./styles/registration.css";

const Login = () => {
  return (
    <>
      <div className="row registration-page">
        <div className="col-sm-6">
          <h2>Login</h2>
          <p>Get access to your Orders,WishList and Recommendataions</p>
        </div>
        <div className="col-sm-6">
          <SignInForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
