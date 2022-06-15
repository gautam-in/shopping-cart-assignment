export const formValidation = (values, validationRules) => {
  let error = {
    isError: false,
    errorMessage: {},
  };
  let errorMessage = {};
  validationRules.forEach((validation) => {
    if (
      validation.name in values &&
      !validation.method(values[validation.name])
    ) {
      errorMessage = {
        ...errorMessage,
        [validation.name]: validation.message,
      };
    }
  });
  if (Object.keys(errorMessage).length) {
    return {
      ...error,
      isError: true,
      errorMessage: { ...errorMessage },
    };
  }
  return error;
};
