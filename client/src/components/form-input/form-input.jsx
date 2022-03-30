import React from "react";
import "./form-input.styles.css";

const FormInput = ({ label, name, error, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input
        onChange={handleChange}
        id={name}
        className="form-input"
        aria-describedby={`${name}Desc`}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={name}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {error && (
        <span id={`${name}Desc`} role="alert" className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
