export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const loginButton = "Login";
export const loginEmailLabel = "Email";
export const loginPasswordLabel = "Password";

export const RegisterButton = "Signup";
export const RegisterFirstNameLabel = "First Name";
export const RegisterLastNameLabel = "Last Name";
export const RegisterEmailLabel = "Email";
export const RegisterPasswordLabel = "Password";
export const RegisterConfirmPasswordLabel = "Comfirm Password";

export const requiredError = "Field cannot be empty";
export const emailRegexError = "Please provide a valid email";
export const RegisterPasswordRegexError =
  "Passwords should consists 6-16 characters with atleast one alphabet, number and special character";
