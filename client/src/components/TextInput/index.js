import React, { useState } from "react";
import classes from "./textInput.module.scss";

function TextInput({ label, type, id, error, onBlur, ...inputProps }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className={classes.inputContainer}>
        <label
          className={`${classes.label} ${
            isFocused ? classes.activeInputLabel : ""
          }`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...inputProps}
          className={classes.input}
          id={id}
          type={type}
        />
      </div>
      {error ? <span className={classes.error}>{error}</span> : null}
    </>
  );
}

export default TextInput;
