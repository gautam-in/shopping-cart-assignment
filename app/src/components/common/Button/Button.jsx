import React from "react";

import style from "./button.module.css";

export const Button = ({ children, ...otherProps }) => {
  return (
    <button className={style.buttonStyle} {...otherProps}>
      {children}
    </button>
  );
};
