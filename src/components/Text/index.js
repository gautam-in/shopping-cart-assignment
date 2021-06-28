import React from "react";

import "./style.scss";

const Text = ({
  ariaLabel = "",
  ariaHidden = false,
  className = "",
  children,
  ...otherProps
}) => {
  return (
    <span
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      className={`text ${className}`}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Text;
