import React from "react";

import "./style.scss";

const Button = ({
  ariaLabel = "",
  ariaHidden = false,
  children,
  className = "",
  clickHandler,
  disabled = false,
  type = "submit",
  ...otherProps
}) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      className={`button ${className}`}
      disabled={disabled}
      onClick={clickHandler}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
