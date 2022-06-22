import React from "react";
import "../Input/Input.scss";

const Input = ({ label, ...props }) => {
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
    </div>
  );
};

export default Input;
