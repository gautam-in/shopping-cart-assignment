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
  errors,
}) {
  const [visited, setVisited] = useState(false);

  const ErrorMsg = ({ id, children }) => {
    return (
      <label
        htmlFor={id}
        className="form_error"
        aria-label={children}
        aria-live="assertive"
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
        // onFocus={() => {
        //   setVisited(false);
        // }}
        onBlur={() => {
          setVisited(true);
        }}
        autoComplete="off"
        required={required}
      />
      <label htmlFor={id}>{label}</label>
      {visited &&
        errors?.map((error) => <ErrorMsg key={error}>{error}</ErrorMsg>)}
    </div>
  );
}

export default FormField;
