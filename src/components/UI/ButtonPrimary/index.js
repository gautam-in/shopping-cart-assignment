import React from "react";
import classes from "./ButtonPrimary.module.css";
const ButtonPrimary = (props) => {
  return (
    <button className={classes["btn-primary"]} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
