export const emailValidation = {
    pattern: {
      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/i,
      message: "Valid email address is required",
    },
  };
  
  export const firstName = {
    minLength: {
      value: 2,
      message: `First name is too Short`,
    },
    maxLength: {
      value: 20,
      message: `First name is too long`,
    },
  };
  
  export const lastName = {
    minLength: {
      value: 2,
      message: `Last name is too Short`,
    },
    maxLength: {
      value: 20,
      message: `Last name is too long`,
    },
  };
  
  export const password = {
    minLength: {
      value: 5,
      message: "Password is too Short",
    },
  };