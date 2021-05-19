import React, { useState } from "react";
import "./FormField.scss";

function FormField({
  type,
  label,
  name,
  id,
  value,
  onChange,
  required,
  validate,
}) {
  const strongRegex = new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );

  const emailExp = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const [error, setError] = useState(false);
  const [visited, setVisited] = useState(false);
  const checkEmptyInput = () => {
    if (value) {
      setError(false);
    } else setError(true);
  };

  const ErrorMsg = ({ children }) => {
    return (
      <label
        htmlFor={id}
        className="form_error"
        aria-label="Field cannot be empty"
        aria-live="polite"
      >
        {children}
      </label>
    );
  };
  return (
    <div className="form_field">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        aria-required={required}
        required={required}
        onBlur={() => {
          setVisited(true);
          if (required) checkEmptyInput();
        }}
        aria-live="assertive"
      />
      <label htmlFor={id}>{label}</label>
      <label
        htmlFor={id}
        className="form_error"
        aria-label={error ? `${name} field cannot be empty` : ""}
        aria-live="assertive"
      >
        {error ? `${name} field cannot be empty` : ""}
      </label>
      {/* {error && <ErrorMsg>{label} cannot be empty</ErrorMsg>} */}

      {name === "email" && validate && (
        <ErrorMsg>Provide a validate email</ErrorMsg>
      )}
      {validate &&
        type === "password" &&
        visited &&
        !strongRegex.test(value) && (
          <ErrorMsg>
            Password should be minimum 6 character with atleast one alphabet,
            number and a special character.
          </ErrorMsg>
        )}
    </div>
  );
}

export default FormField;
