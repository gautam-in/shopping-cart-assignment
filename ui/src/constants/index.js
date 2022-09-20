export { default as NAV_INFO } from "./navInfo";
export { PAGE_URL, API_URL } from "./urls";

export const INPUT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
};

export const BUTTON_TYPES = {
  BUTTON: "",
  SUBMIT: "submit",
};

export const PASSWORD_MIN_LENGTH = 6;

export const ERROR_TYPES = {
  REQUIRED: "required",
  INVALID_EMAIL: "invalidEmail",
  SMALL_PASSWORD: "passwordLength",
  NONE: "",
};
/* eslint-disable-next-line no-useless-escape */
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
