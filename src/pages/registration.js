import React from "react";
import SignUnForm from "../comps/signUp";
import Footer from "./footer";
import "./styles/registration.css";

const Registration = () => {
  return (
    <>
      <div className="row registration-page">
        <div className="col-sm-6">
          <h2>SignUp</h2>
          <p>We do not share your details with anyone</p>
        </div>
        <div className="col-sm-6">
          <SignUnForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
