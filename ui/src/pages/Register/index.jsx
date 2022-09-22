import { useState } from "react";
import { Header, Form } from "../../container";
import contentString from "../../contentStrings/en.json";
import { getRegisterFormFields } from "../../utils/form";
import { matchConfirmPassword } from "../../utils/input";
import { FIELD_NAMES, FORM_TYPES, ERROR_TYPES } from "../../constants";

const Register = () => {
  /*
    Input format = {
      value: inputValue,
      isError: false,
      errorType: ERROR_TYPES.NONE
    } 
  */
  const [fieldsValue, setFieldValue] = useState({
    [FIELD_NAMES.FIRST_NAME]: "",
    [FIELD_NAMES.LAST_NAME]: "",
    [FIELD_NAMES.EMAIL]: "",
    [FIELD_NAMES.PASSWORD]: "",
    [FIELD_NAMES.CONFIRM_PASSWORD]: "",
  });

  const [error, setError] = useState({
    showError: false,
    errorType: ERROR_TYPES.NONE,
  });

  const {
    form: {
      register: { fields },
    },
  } = contentString;

  const updateFieldValue = ({ value, isError, errorType }, name) => {
    setFieldValue({
      ...fieldsValue,
      [FIELD_NAMES[name]]: value,
    });

    setError({ showError: isError, errorType });

    const password = fieldsValue[FIELD_NAMES.PASSWORD];
    const result = matchConfirmPassword(value, password, name);

    if (result) {
      setError({ showError: true, errorType: ERROR_TYPES.UN_MATCHED_PASSWORD });
    }
  };

  const getFieldsInfo = getRegisterFormFields(fields, updateFieldValue);

  const onSubmit = (event) => {
    event.preventDefault();
    // callApi(email, password)
  };

  return (
    <div>
      <Header />
      <Form
        onSubmithandler={onSubmit}
        formType={FORM_TYPES.REGISTER}
        error={error}
        formFields={getFieldsInfo}
      />
    </div>
  );
};

export default Register;
