import React from "react";

import "./FormInput.scss";

const FormInput = ({
  handleChange,
  label,
  htmlFor,
  ariaLabel,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        htmlFor={htmlFor}
        onChange={handleChange}
        aria-label={ariaLabel}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          id={htmlFor}
        >
          {" "}
          {label}{" "}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
