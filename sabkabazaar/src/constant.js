export const nameValidation = {
  required: true,
  pattern: /^[A-Za-z]+$/,
  minLength: 3,
  maxLength: 20,
};

export const emailValidation = {
  required: true,
  pattern: /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  minLength: 6,
  maxLength: 40,
};

export const passwordValidation = {
  required: true,
  minLength: 6,
  maxLength: 40,
  pattern: /^\S*$/,
};
