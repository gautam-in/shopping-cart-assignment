import React from "react";
import { BiError } from "react-icons/bi";

function FormControl({ label, type, value, name, id, handleChange, errorMsg }) {
  return (
    <div className="form-element">
      <label htmlFor={name}>
        {label}
        <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        aria-required="true"
        aria-describedby="errorMsg"
      />
      {errorMsg && (
        <div role="alert" id="errorMsg">
          <BiError />
          {errorMsg}
        </div>
      )}
    </div>
  );
}

export default FormControl;
