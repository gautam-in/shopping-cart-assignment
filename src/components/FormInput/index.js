import React from "react";

import "./style.scss";

const FormInput = ({
  ariaLabel,
  ariaHidden = false,
  changeHandler,
  htmlFor,
  errors = {},
  label,
  name,
  ...otherProps
}) => {
  return (
    <div className="form-group">
      <input
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        className="form-group-input"
        id={htmlFor}
        name={name}
        onChange={changeHandler}
        {...otherProps}
      />
      {label ? (
        <label
          className={`form-group-label ${
            otherProps.value.length ? "input-shrink" : ""
          }`}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      ) : null}
      {errors[name] && (
        <div className="form-group-error-message" role="alert" tabIndex="-1">
          {error[name]}
        </div>
      )}
    </div>
  );
};

export default FormInput;
