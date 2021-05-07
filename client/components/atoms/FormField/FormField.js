import React from "react";
import "./FormField.scss";

function FormField({ type, label, name, id, value, onChange }) {
  return (
    <div className="form_field">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default FormField;
