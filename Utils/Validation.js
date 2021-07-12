import {
  Required,
  InvalidEmail,
  InvalidPassword,
  InvalidName,
  ConfirmPasswordError,
} from "../constant/index";
export const validateEmail = function (value) {
  let error = "";
  if (!value) {
    error = Required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = InvalidEmail;
  }
  return error;
};
export const validatePassword = function (value) {
  let error = "";
  let regExp = new RegExp(
    "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
  );
  if (!value) {
    error = Required;
  } else if (!regExp.test(value)) {
    error = InvalidPassword;
  }
  return error;
};
export const validateName = function (value) {
  let error = "";
  if (!value) {
    error = Required;
  } else if (!/^[a-zA-Z\s]*$/.test(value)) {
    error = InvalidName;
  }
  return error;
};
export const loginValidation = (values) => {
  let { email, password } = values;
  let errors = {};
  if (validateEmail(email)) {
    errors.email = validateEmail(email);
  }
  if (validatePassword(password)) {
    errors.password = validatePassword(password);
  }

  return errors;
};

export const RegisterValidation = (values) => {
  let { firstname, lastname, email, password, confirmPassword } = values;
  let errors = {};
  if (validateName(firstname)) {
    errors.firstname = validateName(firstname);
  }
  if (validateName(lastname)) {
    errors.lastname = validateName(lastname);
  }
  if (validateEmail(email)) {
    errors.email = validateEmail(email);
  }
  if (validatePassword(password)) {
    errors.password = validatePassword(password);
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = ConfirmPasswordError;
  }

  return errors;
};
