export const checkValidEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};

export const checkValidPassword = (password) => {
  const listOfErrors = [];
  if (password.length > 16) listOfErrors.push("Is greater than 16 characters");
  if (password.length < 8) listOfErrors.push("Is lesser than 8 characters");
  if (!/\d/.test(password))
    listOfErrors.push("Should contain atleast one number");
  if (!/[a-zA-Z]/.test(password))
    listOfErrors.push("Should contain atleast one letter");
  return listOfErrors;
};

export const checkNameValid = (name) => {
  return name.length < 15 && name.length > 2;
};
