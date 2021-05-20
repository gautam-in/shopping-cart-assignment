import React, { useState } from "react";
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
  const [error, setError] = useState("");
  const handleBlur = () => {
    if (value.trim() == "") {
      setError(errorLabel);
    } else {
      setError("");
    }
  };
  return (
    <div className="form-group">
      <input
        type={type}
        className={`form-control ${className} ${error ? "error" : "filled"}`}
        onChange={handleInputChange}
        name={name}
        value={value}
        aria-label={label}
        onBlur={handleBlur}
        {...rest}
      />
      <label htmlFor={name} aria-label={label}>
        {label}
      </label>
      <span className="form-error" aria-label={error}>
        {error}
      </span>
    </div>
  );
};

export default Input;
