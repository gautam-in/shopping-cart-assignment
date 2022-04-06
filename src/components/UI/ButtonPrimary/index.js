import React from "react";
import classes from "./ButtonPrimary.module.css";
const ButtonPrimary = (props) => {
  return (
    <button
      style={props.style}
      className={`${classes["btn-primary"]} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
