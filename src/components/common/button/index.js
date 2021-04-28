import React from "react";
import "./index.scss";

const Button = ({ onClick, className = "", children, variant, ...rest }) => {
  return (
    <button
      className={`btn ${className} btn-${variant}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
