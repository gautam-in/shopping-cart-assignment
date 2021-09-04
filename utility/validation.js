export const validUserEmailString = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

export const validUserPasswordString = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

export const validateUserEmail = (email) => {
  return email.match(new RegExp(validUserEmailString)) ? "true" : "false";
};

export const validateUserPassword = (password) => {
  return password.match(new RegExp(validUserPasswordString)) ? "true" : "false";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword ? "true" : false;
};

export const userExist = (email) => {
  let users = JSON.parse(localStorage.getItem("user"));

  return users === null
    ? false
    : users.some((item) => item.email.toUpperCase() === email.toUpperCase());
};
