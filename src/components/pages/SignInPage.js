import React from 'react';
import '../molecules/SigninForm/SigninForm.scss';
import formInputs from '../../shared/Login.json';
import * as Constants from '../../shared/constants';
import FormPage from '../templates/FormPage/FormPage';
import { useHistory } from 'react-router-dom';
const SignInPage = () => {
  const history = useHistory();
  const loginUser = () => {
    history.push('/home');
  };
  return (
    <main className='container'>
      <FormPage
        title={Constants.LoginTitle}
        desc={Constants.LoginDescription}
        formInputs={formInputs}
        formSubmit={loginUser}
      />
    </main>
  );
};

export default SignInPage;
