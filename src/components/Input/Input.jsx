import React from "react";
import "../Input/Input.scss";

const Input = ({ label, error, ...props }) => {
  return (
    <div className="input-container">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={`${props.value.length ? "shrink" : ""}
            form-input-label`}
        >
          {label}
        </label>
      )}
      <span className="input-error">{error && error}</span>
    </div>
  );
};

export default Input;
