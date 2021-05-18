import React from "react";
import classes from "./Button.module.scss";
import cx from "classnames";
function Button(props) {
  return (
    <button
      class={cx(classes.button, "btn", props.className)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <label className={cx(classes.label, props.labelClassName)}>
        {props.text}
      </label>
    </button>
  );
}

export default Button;
