import React, { useEffect, useRef } from "react";

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

  const errorRef = useRef(null);

  useEffect(() => {
    if (errors[name] != undefined && name == Object.keys(errors)[0]) {
      errorRef.current.focus();
    }
  }, [errors])

  return (
    <div className="group">
      <input
        className="form-input"
        id={htmlFor}
        onChange={handleChange}
        aria-label={ariaLabel}
        name={name}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          htmlFor={htmlFor}
        >
          {" "}
          {label}{" "}
        </label>
      ) : null}
      {errors[name] && <div role="alert" className="error-message" tabIndex="-1" ref={errorRef} >{errors[name]}</div>}
    </div>
  );
};

export default FormInput;
