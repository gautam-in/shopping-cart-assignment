import React from 'react';
import formInputs from '../../shared/Register.json';
import * as Constants from '../../shared/constants';
import FormPage from '../templates/FormPage/FormPage';
import { useHistory } from 'react-router-dom';
const RegisterPage = () => {
  const history = useHistory();
  const registerUser = () => {
    history.push('/home');
  };
  return (
    <main className='container'>
      <FormPage
        title={Constants.RegisterTitle}
        desc={Constants.RegisterDescription}
        formInputs={formInputs}
        formSubmit={registerUser}
      />
    </main>
  );
};

export default RegisterPage;
