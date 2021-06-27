import React from "react";

import "./style.scss";

const Text = ({ ariaLabel = "", className = "", children, ...otherProps }) => {
  return (
    <span
      aria-label={ariaLabel}
      className={`text ${className}`}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Text;
