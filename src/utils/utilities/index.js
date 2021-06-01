/**
* validation - check Validation
* @returns {object}
*/
export const validation = (obj) => {
  const { error, errorMsg } = getError(obj);
  return { error, errorMsg };
};


/**
* getError - handles errors
* @returns {object}
*/
export const getError = (obj) => {
  if (value.length === 0 && valueChanged && errorLabel) {
    return {
      error: true,
      errorMsg: errorLabel,
    };
  } else if (value.length === 0 && checkValidation && errorLabel) {
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
