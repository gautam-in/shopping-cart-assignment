import React from "react";
import "./auth-info.styles.css";

const AuthInfo = ({ heading, subHeading }) => {
  return (
    <div className="auth-info">
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default AuthInfo;
