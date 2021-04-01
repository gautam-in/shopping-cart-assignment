import React from "react";

import "./FormInput.scss";

const FormInput = ({
  handleChange,
  label,
  htmlFor,
  ariaLabel,
  errors = {},
  name,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        htmlFor={htmlFor}
        onChange={handleChange}
        aria-label={ariaLabel}
        name={name}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          id={htmlFor}
          htmlFor={name}
        >
          {" "}
          {label}{" "}
        </label>
      ) : null}
      {errors[name] && <p role="alert" className="error-message">{errors[name]}</p>}
    </div>
  );
};

export default FormInput;
