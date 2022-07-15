import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import './SignIn.scss';
import CommonSignInSignUp from '../../components/CommonSignInSignUp/CommonSignInSignUp';
import { login } from '../../redux/user/user.actions';
import Alert from '../../components/Alert/Alert';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useDispatch, useSelector } from "react-redux";
const SignIn = () => {


  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const dispatch = useDispatch();


  let [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = formState;

    try {
      dispatch(login(email, password));

      setFormState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setFormState({ ...formState, [name]: value });
  };


  return (
    <CommonSignInSignUp title="Login" summary={"Get access to your Orders, Whislist and Recommendation"}>
      {error && <Alert variant="error" message={error} />}
      {loading && <LoadingSpinner />}
      <form className='auth-form' onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={formState.email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={formState.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <Button type='submit' size='large'>Login</Button>
        </div>
      </form>
    </CommonSignInSignUp>
  );

}

export default SignIn;
