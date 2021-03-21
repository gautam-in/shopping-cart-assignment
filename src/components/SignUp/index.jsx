import React from 'react';
import { useHistory } from 'react-router';

import formHook from '../../hooks/formHook';
import WEB_PATH from '../../routes/webPath';
import { EMAIL, PASSWORD } from '../../constants/regex';

import SignUpPage from './SignUpPage';

const SignUp = () => {
  const history = useHistory();
  const [fields, setFields] = React.useState({
    firstName: {
      isRequired: true,
      requiredError: 'Please enter the first name.',
      value: '',
      isMatching: false,
      matchError: '',
      error: '',
    },
    lastName: {
      isRequired: true,
      requiredError: 'Please enter the last name.',
      value: '',
      isMatching: false,
      matchError: '.',
      error: '',
    },
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
    confirmPassword: {
      isRequired: true,
      requiredError: 'Please confirm the password.',
      value: '',
      isMatching: PASSWORD,
      matchError: 'Invalid password.',
      sameAs: 'password',
      sameAsError: 'Password and confirm password are not same',
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
    <SignUpPage
      fields={fields}
      formActions={formActions}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUp;
