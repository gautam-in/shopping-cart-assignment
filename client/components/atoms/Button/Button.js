import React from "react";
import "./Button.scss";

function Button({ children, type = "submit", onClick, className = "" }) {
  return (
    <button
      className={`button noselect ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
