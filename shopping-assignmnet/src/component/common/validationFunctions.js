/* eslint-disable no-console */
export const required = (value) => !!value;

export const validateEmail = (value) => {
  const reg = /\S+@\S+\.\S+/;
  return reg.test(value);
};

export const validatePassword = (value) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  console.log(reg.test(value));
  return reg.test(value);
};
