import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  type,
  inputName,
  onChange,
  displayName,
  placeholder,
  value,
  errorMessage,
}) => (
  <div className="form-field">
    <input
      type={type}
      className="form-field__input"
      name={inputName}
      id={inputName}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    <label htmlFor="email" className="form-field__label">
      {displayName}
    </label>
    <div className="form-field__bar"></div>
    <small
      className="form-field__error-message"
      aria-roledescription={errorMessage}
      role="Error"
      dangerouslySetInnerHTML={{ __html: errorMessage }}
    />
  </div>
);
Input.propTypes = {
  type: PropTypes.string,
  inputName: PropTypes.string,
  onChange: PropTypes.func,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
};
