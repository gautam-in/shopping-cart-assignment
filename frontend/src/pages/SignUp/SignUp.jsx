import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import CommonSignInSignUp from '../../components/CommonSignInSignUp/CommonSignInSignUp';

import './SignUp.scss';
import { register } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignUp = () => {

  let [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      dispatch(register({ firstName, lastName, email, password, confirmPassword }));

      // await createUserProfileDocument(user, { firstName });

      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <CommonSignInSignUp title="Sign Up" summary={"We do not share your details with any one"}>
      <form className='auth-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='firstName'
          value={formState.firstName}
          onChange={handleChange}
          label='First Name'
          required
        />
        <FormInput
          type='text'
          name='lastName'
          value={formState.lastName}
          onChange={handleChange}
          label='Last Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={formState.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={formState.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={formState.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <Button type='submit' size='large'>SIGN UP</Button>
      </form>
    </CommonSignInSignUp>

  );
}

export default SignUp;
