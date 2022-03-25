const validateRequired = (values, errors = {}) => {
  for (const [key, value] of Object.entries(values)) {
    if (!value) {
      errors[key] = "Field is required";
    }
  }
  return errors;
};

const validatePassword = (password) => {
  let error = "";
  const passwordRegex = /(?=.*?[0-9])(?=.*?[A-Za-z]).+/;

  let spaceRegex = /^[\S]+$/;
  if (password.length < 7) {
    error = "Password must be atleast 6 characters long.";
  } else if (!passwordRegex.test(password) || !spaceRegex.test(password)) {
    error =
      "Invalid password. Must contain one number, one alphabet and no spaces.";
  }
  return error;
};

const validateConfirmPassword = (password, confirmPassword) => {
  let error = "";
  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      error = "Password not matched";
    }
  }
  return error;
};

const validateEmail = (email) => {
  let error = "";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    error = "Invalid email address";
  }

  return error;
};

export {
  validateRequired,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
};
