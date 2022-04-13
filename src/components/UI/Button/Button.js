import React from "react";
import "./Button.scss";

function Button(props) {
  const attachClass = [
    "product_button",
    props.styles ? props.styles : null,
  ].join(" ");
  return (
    <button
      className={attachClass}
      onClick={props.click}
      aria-label={props.ariaLabel}
      onKeyDown={props.keyDown}
    >
      {props.children}
    </button>
  );
}

export default Button;
