import React from "react";
import "./index.scss";

const Button = ({ onClick, className = "", children, variant, ...rest }) => {
  return (
    <button
      className={`btn ${className} btn-${variant}`}
      onClick={onClick}
      aria-label="click button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
