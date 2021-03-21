import React from 'react';
import { useHistory } from 'react-router';

import formHook from '../../hooks/formHook';
import WEB_PATH from '../../routes/webPath';
import { EMAIL, PASSWORD } from '../../constants/regex';

import LoginPage from './LoginPage';

const Login = () => {
  const history = useHistory();
  const [fields, setFields] = React.useState({
    email: {
      isRequired: true,
      requiredError: 'Please enter the email.',
      value: '',
      isMatching: EMAIL,
      matchError: 'Invalid Email',
      error: '',
    },
    password: {
      isRequired: true,
      requiredError: 'Please enter the password.',
      value: '',
      isMatching: PASSWORD,
      matchError: 'Invalid password.',
      error: '',
    },
  });

  const {
    validateInputs,
    onInputChange,
    onSubmitValidate,
    formActions,
  } = formHook({ setFields });

  const onSubmit = React.useCallback((e, values) => {
    e.preventDefault();
    const error = onSubmitValidate(values);
    if (!error) {
      history.push(WEB_PATH.HOME);
    }
  }, [validateInputs, history.push]);

  return (
    <LoginPage
      fields={fields}
      formActions={formActions}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
