import {
  INPUT_TYPES,
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  FIELD_NAMES,
  ERROR_TYPES,
} from "../constants";

/**
 * Returns result is the value non-empty if required.
 *
 * @param {string} value The value to evaluate.
 * @param {boolean} required To test value only if required.
 * @return {boolean} result The result is true if it's empty and  .
 */
export const isEmpty = (value) => {
  return value ? ERROR_TYPES.NONE : ERROR_TYPES.REQUIRED;
};

/**
 * Returns result is the value a valid-email or not.
 *
 * @param {string} value The value to evaluate.
 * @param {string} type To check email only if its type is email
 * @return {boolean} result The result is true if it's a valid email else false.
 */
export const isValidEmail = (value, type) => {
  if (type !== INPUT_TYPES.EMAIL) return ERROR_TYPES.NONE;
  return EMAIL_REGEX.test(value) ? ERROR_TYPES.NONE : ERROR_TYPES.INVALID_EMAIL;
};

/**
 * Returns result is the value a valid-password or not.
 *
 * @param {string} value The value to evaluate.
 * @param {boolean} type To test value only its type is password
 * @param {boolean} checkLength To checkLength or not
 * @return {boolean} result The result is true if it's it's a valid password else false.
 */
export const isValidPassword = (value, type, checkLength = true) => {
  if (type !== INPUT_TYPES.PASSWORD) return ERROR_TYPES.NONE;
  if (!checkLength) return ERROR_TYPES.NONE;
  // this doesn't allow other characters
  return value.length >= PASSWORD_MIN_LENGTH && /^\w+\d+$/.test(value)
    ? ERROR_TYPES.NONE
    : ERROR_TYPES.INVALID_PASSWORD;
};

export const isValidName = (value, type, name) => {
  if (type !== INPUT_TYPES.TEXT) return ERROR_TYPES.NONE;
  return /^\w+$/.test(value) ? ERROR_TYPES.NONE : ERROR_TYPES.INVALID_NAME;
};

export const matchConfirmPassword = (confirmPassword, password, name) => {
  if (FIELD_NAMES.CONFIRM_PASSWORD !== name) return ERROR_TYPES.NONE;
  return confirmPassword === password
    ? ERROR_TYPES.NONE
    : ERROR_TYPES.UN_MATCHED_PASSWORD;
};
