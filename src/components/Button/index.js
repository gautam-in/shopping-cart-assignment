import React from "react";

import "./style.scss";

const Button = ({
  ariaLabel = "",
  ariaHidden = false,
  className = "",
  children,
  disabled = false,
  handler,
  type = "submit",
}) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      className={`button ${className}`}
      disabled={disabled}
      onClick={handler}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
