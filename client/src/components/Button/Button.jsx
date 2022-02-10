import React from "react";
import "./Button.css";

function Button({ className, onClick, children, ...props }) {
  return (
    <button
      className={`btn ${className ? className : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
