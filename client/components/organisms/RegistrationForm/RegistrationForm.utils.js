export const validateName = (value) => {
  let error;
  if (!value) {
    error = "Please enter a value.";
  } else if (!value.match(/^[a-z ,.'-]+$/i)) {
    error = "Please enter a valid name.";
  } else {
    error = undefined;
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Please enter the email address.";
  } else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    error = "Please enter a valid email address.";
  } else {
    error = undefined;
  }
  return error;
};

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Please enter a password.";
  } else if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
    error =
      "Password must have minimum six characters including one letter, one number and no spaces.";
  } else {
    error = undefined;
  }
  return error;
};

export const validateConfirmPassword = (value, password) => {
  let error;
  if (!value) {
    error = "Please enter the confirm password.";
  } else if (!value.match(password)) {
    error = "Password and confirm password do not match.";
  } else {
    error = undefined;
  }
  return error;
};
