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
  INVALID_PASSWORD: "invalidPassword",
  INVALID_NAME: "invalidName",
  UN_MATCHED_PASSWORD: "unMatchedPassword",
  NONE: "",
};
/* eslint-disable-next-line no-useless-escape */
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const FORM_TYPES = {
  LOGIN: "signIn",
  REGISTER: "register",
};

export const FIELD_NAMES = {
  EMAIL: "email",
  PASSWORD: "password",
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  CONFIRM_PASSWORD: "confirmPassword",
};

export const FORM_FIELDS = {
  signIn: [
    {
      name: FIELD_NAMES.EMAIL,
      type: INPUT_TYPES.EMAIL,
    },
    {
      name: FIELD_NAMES.PASSWORD,
      type: INPUT_TYPES.PASSWORD,
      shouldCheckPassword: false,
    },
  ],
  register: [
    {
      name: FIELD_NAMES.FIRST_NAME,
      type: INPUT_TYPES.TEXT,
    },
    {
      name: FIELD_NAMES.LAST_NAME,
      type: INPUT_TYPES.TEXT,
    },
    {
      name: FIELD_NAMES.EMAIL,
      type: INPUT_TYPES.EMAIL,
    },
    {
      name: FIELD_NAMES.PASSWORD,
      type: INPUT_TYPES.PASSWORD,
      shouldCheckPassword: true,
    },
    {
      name: FIELD_NAMES.CONFIRM_PASSWORD,
      type: INPUT_TYPES.PASSWORD,
      shouldCheckPassword: true,
      matchPassword: true,
    },
  ],
};
