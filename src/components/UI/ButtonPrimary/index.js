import React from "react";
import classes from "./ButtonPrimary.module.css";
const ButtonPrimary = (props) => {
  return (
    <button className={classes["btn-primary"]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
