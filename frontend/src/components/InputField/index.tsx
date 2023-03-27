import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./InputField.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  errorMsg?: string;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ labelText, errorMsg, className, ...rest }, ref) => {
    return (
      <label className={styles["form-input-filed"]}>
        {labelText && (
          <p className={styles["form-input-filed--text-label"]}>{labelText}</p>
        )}
        <input ref={ref} aria-label={labelText} {...rest} />
        {errorMsg && errorMsg !== "" && <p>{errorMsg}</p>}
      </label>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
