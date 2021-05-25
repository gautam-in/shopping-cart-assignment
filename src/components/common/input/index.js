import React, { useState, useEffect } from "react";
import "./index.scss";

const Input = ({
  type = "text",
  className = "",
  handleInputChange,
  name,
  value,
  label,
  errorLabel,
  invalidErrorLabel,
  regex,
  ...rest
}) => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [valueChanged, setValueChanged] = useState(false);
  const regexValue = new RegExp(regex);

  // useEffect(() => {
  //   validate();
  // }, [valueChanged]);

  /**
   * getError - handles errors
   * @returns {object}
   */
  const getError = (e) => {
    if (value.length === 0 && valueChanged && errorLabel) {
      return {
        error: true,
        errorMsg: errorLabel,
      };
    } else if (
      value != "" &&
      errorLabel &&
      invalidErrorLabel &&
      !regexValue.test(value)
    ) {
      return {
        error: true,
        errorMsg: invalidErrorLabel,
      };
    } else {
      return {
        error: false,
      };
    }
  };

  const validate = () => {
    const { error, errorMsg } = getError();

    if (error) {
      setError(error);
      setErrorMsg(errorMsg);
    } else {
      setError(error);
    }
    setErrorMsg(errorMsg);
  };

  const hasError = () => {
    return Boolean(error);
  };

  /**
   * handleOnFocus - event to hide placeholder on focus
   */
  const handleOnFocus = () => {
    setValueChanged(true);
  };

  /**
   * handleOnBlur - to check the value
   */
  const handleBlur = () => {
    validate();
  };
  return (
    <div className="form-group">
      <input
        type={type}
        className={`form-control ${className} ${
          valueChanged && hasError()
            ? value.length === 0
              ? "error"
              : "invaild"
            : valueChanged
            ? "filled"
            : ""
        }`}
        onChange={handleInputChange}
        name={name}
        value={value}
        aria-label={label}
        onBlur={handleBlur}
        onFocus={handleOnFocus}
        // required
        {...rest}
      />
      <label htmlFor={name} aria-label={label}>
        {label}
      </label>
      <span className="form-error" aria-label={errorMsg}>
        {errorMsg}
      </span>
    </div>
  );
};

export default Input;
