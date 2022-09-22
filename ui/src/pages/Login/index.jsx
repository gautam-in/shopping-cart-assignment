import { useState } from "react";
import { Header, Form } from "../../container";
import contentString from "../../contentStrings/en.json";
import { getSignInFormFields } from "../../utils/form";
import { FIELD_NAMES, FORM_TYPES, ERROR_TYPES } from "../../constants";

const Login = () => {
  /*
    Input format = {
      value: inputValue,
      isError: false,
      errorType: ERROR_TYPES.NONE
    } 
  */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    showError: false,
    errorType: ERROR_TYPES.NONE,
  });

  const {
    form: {
      signIn: { fields },
    },
  } = contentString;

  const updateEmail = ({ value, isError, errorType }) => {
    setEmail(value);
    setError({ showError: isError, errorType });
  };

  const updatePassword = ({ value, isError, errorType }) => {
    setPassword(value);
    setError({ showError: isError, errorType });
  };

  const getFieldsInfo = getSignInFormFields(fields, {
    [FIELD_NAMES.EMAIL]: updateEmail,
    [FIELD_NAMES.PASSWORD]: updatePassword,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // callApi(email, password)
  };

  return (
    <div>
      <Header />
      <Form
        onSubmithandler={onSubmit}
        formType={FORM_TYPES.LOGIN}
        error={error}
        formFields={getFieldsInfo}
      />
    </div>
  );
};

export default Login;
