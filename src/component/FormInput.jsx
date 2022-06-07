import React from "react";
import "../styles/form-input.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""}
          form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
