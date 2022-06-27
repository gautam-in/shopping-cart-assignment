import { compareIt } from '../auth/passwordEncryption';
import {
  EMAIL_ERROR,
  EMAIL_REGEX,
  NAME_ERROR,
  NAME_REGEX,
  PWD_ERROR,
  PWD_REGEX,
} from '../Constants';

export default function useValidate({
  form,
  firstname,
  lastname,
  email,
  password,
  confirm_password,
  errors,
}) {
  if (form === 'sign-in') {
    if (!email) {
      errors.email = 'Email required';
    } else if (!EMAIL_REGEX.check_address.test(email)) {
      errors.email = EMAIL_ERROR.check_address;
    } else if (!EMAIL_REGEX.check_period.test(email)) {
      errors.email = EMAIL_ERROR.check_period;
    }
    const users = JSON.parse(localStorage.getItem('userData'));
    users.forEach((user) => {
      if (user.email === email) {
        compareIt(password,user.password).then((res) => {
          if(!res) {
            errors.password = 'Passwords do not match';
          } 
        });
      } else {
        errors.email = 'No such user with this email exist !';
      }
    });

    if (!password) {
      errors.password = 'password is required';
    }
  } else if (form === 'register') {
    if (firstname === undefined || !firstname || !firstname.trim()) {
      errors.firstname = 'first name is required';
    } else if (!NAME_REGEX.check_two_char.test(firstname.trim())) {
      errors.firstname = NAME_ERROR.check_two_char;
    } else if (!NAME_REGEX.check_overall.test(firstname.trim())) {
      errors.firstname = NAME_ERROR.check_overall;
    }

    if (lastname === undefined || !lastname || !lastname.trim()) {
      errors.lastname = 'last name is required';
    } else if (!NAME_REGEX.check_two_char.test(lastname.trim())) {
      errors.lastname = NAME_ERROR.check_two_char;
    } else if (!NAME_REGEX.check_overall.test(lastname.trim())) {
      errors.lastname = NAME_ERROR.check_overall;
    }

    if (email === undefined || !email) {
      errors.email = 'Email is required';
    } else if (!EMAIL_REGEX.check_address.test(email)) {
      errors.email = EMAIL_ERROR.check_address;
    } else if (!EMAIL_REGEX.check_period.test(email)) {
      errors.email = EMAIL_ERROR.check_period;
    }

    if (password === undefined || !password) {
      errors.password = 'Password is required';
    } else if (!PWD_REGEX.test(password)) {
      errors.password = PWD_ERROR;
    } else if (password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }

    if (confirm_password === undefined || !confirm_password) {
      errors.confirm_password = 'confirm password is required';
    } else if (confirm_password !== password) {
      errors.confirm_password = 'password and confirm password do not match';
    }
  }
  return errors;
}
