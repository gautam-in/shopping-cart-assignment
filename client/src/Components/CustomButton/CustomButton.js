import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={"custom-button"} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
