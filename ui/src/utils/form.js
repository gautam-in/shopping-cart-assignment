import { FORM_FIELDS } from "../constants";

export const getSignInFormFields = (fields, updateFunctionList) => {
  return FORM_FIELDS.signIn.map((field) => {
    return {
      ...field,
      labelName: fields[field.name],
      placeHolder: fields[field.name],
      updateValue: updateFunctionList[field.name],
    };
  });
};

export const getRegisterFormFields = (fields, updateFunction) => {
  return FORM_FIELDS.register.map((field) => {
    return {
      ...field,
      labelName: fields[field.name],
      placeHolder: fields[field.name],
      updateValue: (value) => updateFunction(value, field.name),
    };
  });
};
