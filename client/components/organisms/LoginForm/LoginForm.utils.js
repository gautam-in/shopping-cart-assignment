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
  } else {
    error = undefined;
  }
  return error;
};
