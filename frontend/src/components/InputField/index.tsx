import React, { forwardRef, InputHTMLAttributes, useEffect } from "react";
import styles from "./InputField.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  errorMsg?: string;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, name, errorMsg, className, ...rest }, ref) => {
    return (
      <div className={styles["form-input-filed"]}>
        <input
          id={name}
          ref={ref}
          aria-label={labelText}
          {...rest}
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={styles["form-input-filed--text-label"]}
        >
          {labelText}
        </label>
        {errorMsg && errorMsg !== "" && <p>{errorMsg}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
