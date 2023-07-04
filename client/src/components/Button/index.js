import React from "react";
import classes from "./button.module.scss";
import { NavLink } from "react-router-dom";
function Button({ type = "button", children, ...otherProps }) {
  const props = {
    ...otherProps,
    className: `${classes.button} ${otherProps.className || ""}`,
  };
  return type === "button" ? (
    <button {...props}>{children}</button>
  ) : (
    <NavLink {...props}>{children}</NavLink>
  );
}

export default Button;
