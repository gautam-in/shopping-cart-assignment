import { useState } from "react";
import PropTypes from "prop-types";

import {
  isNonEmptyOnRequired,
  isValidEmail,
  isValidPassword,
} from "../../utils/input";
import { INPUT_TYPES, ERROR_TYPES } from "../../constants";
import "./input.scss";

const Input = ({
  labelName,
  type,
  required,
  checkLength,
  getValue,
  placeHolder,
}) => {
  const [inputValue, onInputChange] = useState("");
  const [isError, setError] = useState(false);

  const checkInput = () => {
    const result = {
      value: inputValue,
      isError: false,
      errorType: ERROR_TYPES.NONE,
    };

    if (!isNonEmptyOnRequired(inputValue, required)) {
      result.isError = true;
      result.errorType = ERROR_TYPES.REQUIRED;
    } else if (!isValidEmail(inputValue, type)) {
      result.isError = true;
      result.errorType = ERROR_TYPES.INVALID_EMAIL;
    } else if (!isValidPassword(inputValue, type, checkLength)) {
      result.isError = true;
      result.errorType = ERROR_TYPES.SMALL_PASSWORD;
    }
    setError(result.isError);
    getValue(result);
  };

  return (
    <div>
      <span>{labelName}</span>
      <span className="required">{required ? "*" : ""}</span>
      <input
        type={type}
        onChange={(e) => onInputChange(e.target.value)}
        onBlur={checkInput}
        required={required ? "required" : ""}
        value={inputValue}
        className={isError ? "error" : ""}
        placeholder={placeHolder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
  labelName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  getValue: PropTypes.func.isRequired,
  checkLength: PropTypes.bool,
  placeHolder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  required: false,
  checkLength: false,
  placeHolder: "",
};

export default Input;
