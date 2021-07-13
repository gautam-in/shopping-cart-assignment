export const emailValidation = {
  pattern: {
    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/i,
    message: "Valid email address is required",
  },
};

export const firstName = {
  minLength: {
    value: 3,
    message: `Your First Name is too Short`,
  },
  maxLength: {
    value: 20,
    message: `Your First Name is too long`,
  },
};

export const lastName = {
  minLength: {
    value: 3,
    message: `Your Last Name is too Short`,
  },
  maxLength: {
    value: 20,
    message: `Your Last Name is too long`,
  },
};

export const password = {
  minLength: {
    value: 6,
    message: "Your Password is too Short",
  },
};
