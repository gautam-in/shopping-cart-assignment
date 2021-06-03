import * as Constants from '../../../shared/constants';

const required = (value) => (value ? '' : Constants.ErrorRequired);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? Constants.ErrorEmail : '';
const password = (value) =>
  value && !/^(?=.*[A-Za-z])(?=.*\d)(?!.*\s)[A-Za-z\d]{6,}$/i.test(value)
    ? Constants.ErrorPassword
    : '';
const confirmPassword = (value1, value2) =>
  value1.valueOf().trim() === value2.valueOf().trim() ? '' : Constants.ErrorConfirmPassword;

export const validate = (checkIf, value, ...otherValues) => {
  switch (checkIf) {
    case Constants.Required:
      return required(value);
    case Constants.Email:
      return email(value);
    case Constants.Password:
      return password(value);
    case Constants.ConfirmPassword:
      return confirmPassword(value, otherValues[0]);
    default:
      return Constants.ErrorInvalid;
  }
};
