import { useState } from "react";
import PropTypes from "prop-types";

import {
  isEmpty,
  isValidEmail,
  isValidPassword,
  isValidName,
} from "../../utils/input";
import { INPUT_TYPES, ERROR_TYPES } from "../../constants";
import "./input.scss";

const Input = ({
  labelName,
  type,
  shouldCheckPassword,
  updateValue,
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

    result.errorType =
      isEmpty(inputValue) ||
      isValidEmail(inputValue, type) ||
      isValidPassword(inputValue, type, shouldCheckPassword) ||
      isValidName(inputValue, type);

    result.isError = !(result.errorType === ERROR_TYPES.NONE);
    setError(result.isError);
    updateValue(result);
  };

  return (
    <div>
      <div className={`${inputValue ? "show-label" : "hide-label"}`}>
        <span className="label-name">{labelName}</span>
        <span className="required">*</span>
      </div>
      <input
        type={type}
        onChange={(e) => onInputChange(e.target.value)}
        onBlur={checkInput}
        required
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
  updateValue: PropTypes.func.isRequired,
  shouldCheckPassword: PropTypes.bool,
  placeHolder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  shouldCheckPassword: true,
  placeHolder: "",
};

export default Input;
