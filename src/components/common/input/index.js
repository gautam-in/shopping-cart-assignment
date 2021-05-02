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
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      <span className="form-error">{errorLabel}</span>
    </div>
  );
};

export default Input;
