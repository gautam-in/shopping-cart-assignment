import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button data-testid="button" className={"custom-button"} {...otherProps} style={otherProps.width ? (otherProps.height ? { width: otherProps.width, height: otherProps.height } : { width: otherProps.width }) : (otherProps.height ? { height: otherProps.height } : {})}>
      { children}
    </button >
  );
};

export default CustomButton;
