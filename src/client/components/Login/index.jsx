import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';

import formHook from '../../hooks/formHook';
import WEB_PATH from '../../constants/webPath';
import { EMAIL, PASSWORD } from '../../constants/regex';

import LoginPage from './LoginPage';

export const Login = () => {
  const history = useHistory();
  const [fields, setFields] = useState({
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

  const onSubmit = useCallback((e, values) => {
    e.preventDefault();
    const error = onSubmitValidate(values);
    if (!error) {
      history.push(WEB_PATH.HOME);
    }
  }, [validateInputs]);

  return (
    <LoginPage
      fields={fields}
      formActions={formActions}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default {
  component: Login,
};
