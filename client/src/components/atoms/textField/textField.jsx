import React from "react";
import { useField } from "formik";
import "./textField.scss";

function TextField({ id, label, disabled, inputClassName='', ...props }) {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  return (
    <div className="group">
      <input
        id={id || field.name}
        {...field}
        {...props}
        disabled={disabled}
        className={inputClassName}
      />
            <span class="bar"></span>

      <label htmlFor={id || field.name}>{label}</label>
      {hasError ? <p className="error-msg">{error}</p> : null}
    </div>
  );
}

export default TextField;
