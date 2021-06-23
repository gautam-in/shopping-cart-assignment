export const name = (value) => /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(value);
export const password = (value) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value);
export const email = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
//export const requiredField = value =>  (value || typeof value === 'number' ? undefined : 'Required')

export const validateFunc = (value) => {
  const error = {};
  if (!value.firstname) {
    error.firstname = "First name is required";
  } else if (!name(value.firstname)) {
    error.firstname =
      "name should not contain numbers or any special characters";
  } else {
    error.firstname = "";
  }
  if (!value.lastname) {
    error.lastname = "Last name is required";
  } else if (!name(value.lastname)) {
    error.lastname =
      "name should not contain numbers or any special characters";
  } else {
    error.lastname = "";
  }
  if (!value.email) {
    error.email = "Email is required";
  } else if (!email(value.email)) {
    error.email = "Email id is invalid";
  } else {
    error.email = "";
  }
  if (!value.password) {
    error.password = "password is required";
  } else if (!password(value.password)) {
    error.password =
      "password should contains an Uppercase, a lowercase, a special character and a number";
  } else {
    error.password = "";
  }
  if (!value.confirmPassword) {
    error.confirmPassword = "password is required";
  } else if (!password(value.confirmPassword)) {
    error.confirmPassword =
      "password should contains an Uppercase, a lowercase, a special character and a number";
  } else if (value.password !== value.confirmPassword) {
    error.confirmPassword = "password does not match. Try again!";
  } else {
    error.confirmPassword = "";
  }
  return error;
};
