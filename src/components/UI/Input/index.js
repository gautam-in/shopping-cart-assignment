import React from "react";
import classes from "./Input.module.css";

function Input({ id, type, placeholder, text, required, minlength = 1 }) {
  return (
    <div className={classes["input-container"]}>
      <input
        className={classes["input"]}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minlength}
      />
      <label className={classes["label"]} htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

export default Input;
