import React from "react";
import "./Inputbox.scss";
export default function Inputbox({ input, handleChange, values, errors }) {
  const { type, placeholder, inputId } = input;

  return (
    <>
      <input
        type={type}
        className="floating-input"
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={values}
        onChange={handleChange}
        noValidate
      />
      {errors ? (
        <p className="form-error">{errors}</p>
      ) : (
        <label htmlFor={inputId} className="floating-label">
          {placeholder}
        </label>
      )}
    </>
  );
}
