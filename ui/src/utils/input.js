import { INPUT_TYPES, EMAIL_REGEX, PASSWORD_MIN_LENGTH } from "../constants";

/**
 * Returns result is the value non-empty if required.
 *
 * @param {string} value The value to evaluate.
 * @param {boolean} required To test value only if required.
 * @return {boolean} result The result is true if it's empty and  .
 */
export const isNonEmptyOnRequired = (value, required) => {
  if (!required) return true;
  return !!(required && value);
};

/**
 * Returns result is the value a valid-email or not.
 *
 * @param {string} value The value to evaluate.
 * @param {string} type To check email only if its type is email
 * @return {boolean} result The result is true if it's a valid email else false.
 */
export const isValidEmail = (value, type) => {
  if (type !== INPUT_TYPES.EMAIL) return true;
  return !EMAIL_REGEX.test(value);
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
  if (type !== INPUT_TYPES.PASSWORD) return true;
  if (!checkLength) return true;
  return value.length < PASSWORD_MIN_LENGTH;
};
