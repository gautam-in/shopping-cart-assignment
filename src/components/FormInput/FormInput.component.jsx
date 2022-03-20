import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, error, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <p className="error-message">{error} </p>
    </div>
  );
};

export default FormInput;
