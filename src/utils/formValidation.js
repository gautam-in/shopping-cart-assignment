export const loginFormValidation = ({ email, password }) => {
  let errors = {};
  let isFormValid = true;
  if (!email) {
    isFormValid = false;
    errors.email = "Please Enter Your Email Address";
  } else {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      isFormValid = false;
      errors.email = "Please Enter A Valid Email Address";
    }
  }
  if (!password) {
    isFormValid = false;
    errors.password = "Please Enter Your Password";
  }
  return {
    errors,
    isFormValid,
  };
};

export const registerFormValidation = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  let errors = {};
  let isFormValid = true;
  if (!firstName) {
    isFormValid = false;
    errors.firstName = "Please Enter Your First Name";
  }
  if (!lastName) {
    isFormValid = false;
    errors.lastName = "Please Enter Your Last Name";
  }
  if (!email) {
    isFormValid = false;
    errors.email = "Please Enter Your Email Address";
  } else {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      isFormValid = false;
      errors.email = "Please Enter A Valid Email Address";
    }
  }
  if (!password) {
    isFormValid = false;
    errors.password = "Please Enter Password";
  } else {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,}$/;
    if (!passwordRegex.test(String(password))) {
      isFormValid = false;
      errors.password = `Please Enter A Valid Password Which Have Minimum Length 6 Characters, Must Have A Number And Alphabet, Cannot Have Spaces`;
    }
  }
  if (!confirmPassword) {
    isFormValid = false;
    errors.confirmPassword = "Please Enter Confirm Password";
  } else {
    if (password != confirmPassword) {
      isFormValid = false;
      errors.confirmPassword = "Those Passwords Din't Match. Try Again";
    }
  }
  return {
    errors,
    isFormValid,
  };
};
