import React from "react";
import "./Button.scss";

function Button({
  children,
  type = "submit",
  onClick,
  className = "",
  ariaLabel = "",
  disabled = false,
}) {
  return (
    <button
      className={`button noselect ${className}`}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
