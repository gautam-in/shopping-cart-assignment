export const validateEmail = (email = "") => {
  if ((email || "")?.trim().length === 0)
    return { isValid: false, error: "Email Cannot be empty", value: email };
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (isValid) return { isValid: true, value: email, error: "" };
  return { isValid: false, error: "Email is not valid", value: email };
};

export const validatePassword = (password) => {
  // Check if password has at least 8 characters
  if (password.length < 8) {
    return {
      isValid: false,
      error: "Password must be atleast 8 characters",
      value: password,
    };
  }

  // Check if password contains at least one lowercase letter, one uppercase letter, and one special character
  const lowercasePattern = /[a-z]/;
  const uppercasePattern = /[A-Z]/;
  const specialCharacterPattern = /[!@#$%^&*()]/;

  if (
    !lowercasePattern.test(password) ||
    !uppercasePattern.test(password) ||
    !specialCharacterPattern.test(password)
  ) {
    return {
      isValid: false,
      value: password,
      error:
        "Password must contain at least one lowercase letter, one uppercase letter, and one special character",
    };
  }

  // All checks passed, password is valid
  return { isValid: true, value: password, error: "" };
};
