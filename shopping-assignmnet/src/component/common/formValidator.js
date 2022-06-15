export const formValidation = (values, validationRules) => {
  let error = {
    isError: false,
    errorMessage: {},
  };
  let errorMessage = {};
  validationRules.forEach((validation) => {
    if (!validation.method(values[validation.name])) {
      errorMessage = {
        ...errorMessage,
        [validation.name]: validation.message,
      };
    }
  });
  if (Object.keys(errorMessage).length) {
    error = {
      ...error,
      isError: true,
      errorMessage: { ...errorMessage },
    };
  }
  return error;
};
