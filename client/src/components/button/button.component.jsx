import React from "react";
import "./button.style.scss";

const Button = (props) => {
  return (
    <button
      className={`button-${props.type}`}
      style={{ width: props.width }}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
