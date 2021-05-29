import React from "react";
import classes from "./Button.module.scss";
import cx from "classnames";
function Button(props) {
  return (
    <button
      class={cx(classes.button, "btn", props.className)}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      id="submit"
      data-test="component-button"
    >
      <span
        className={cx(classes.label, props.labelClassName)}
        data-text="button-span"
      >
        {props.text}
      </span>
    </button>
  );
}

export default Button;
