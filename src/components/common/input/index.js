import React from "react";
import "./index.scss";

const Input = ({
  type = "text",
  className = "",
  handleInputChange,
  name,
  value,
  label,
  errorLabel,
  ...rest
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={`form-control ${className}`}
        onChange={handleInputChange}
        name={name}
        value={value}
        aria-label={label}
        {...rest}
      />
      <label htmlFor={name} aria-label={label}>
        {label}
      </label>
      <span className="form-error" aria-label={errorLabel}>
        {errorLabel}
      </span>
    </div>
  );
};

export default Input;
