import React from "react";
import "./button.styles.css";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`button-container ${className ? className : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
