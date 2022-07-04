
export const validateLoginForm = (formData) => {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validatePassword = /^(?!.* )(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  const errorObject = {};
  if (!validatePassword.test(formData.password)) {
    errorObject["pwd"] = "Password must have at least six characters";
  }
  if (!validateEmail.test(formData.email)) {
    errorObject["email"] = "Please enter a valid email";
  }
  return errorObject;
};
