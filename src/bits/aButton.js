import React from "react";
import "./styles/aButtom.css";

const AButton = ({ children, inverted, googleSignIn, ...otherProps }) => (
  <button
    className={`${inverted && "inverted"} ${
      googleSignIn && "google-sign-in"
    } a-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default AButton;
