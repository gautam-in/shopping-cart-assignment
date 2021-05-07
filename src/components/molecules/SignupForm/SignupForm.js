import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';
import ErrorMessage from '../../atoms/ErrorMessage';
import { emailValidation, nameValidation, passwordValidation } from '../../atoms/validation';
import '../../../styles/Form.scss';

const SignupForm = ({ history }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  });

  const password = watch('password');

  const onSubmit = (data) => {
    console.log(data);
    history.push('/');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='text'
        name='firstname'
        id='firstname'
        placeholder='First Name'
        autoFocus
        {...register('firstname', nameValidation)}
        className={errors.firstname ? 'input-error' : ''}
      />
      {errors.firstname && (
        <p className='error-message'>
          <ErrorMessage
            type={errors.firstname.type}
            minLength={nameValidation.minLength}
            maxLength={nameValidation.maxLength}
            field='firstname'
          />
        </p>
      )}
      <Input
        type='text'
        name='lastname'
        id='lastname'
        placeholder='Last Name'
        {...register('lastname', nameValidation)}
        className={errors.lastname ? 'input-error' : ''}
      />
      {errors.lastname && (
        <p className='error-message'>
          <ErrorMessage
            type={errors.lastname.type}
            minLength={nameValidation.minLength}
            maxLength={nameValidation.maxLength}
            field='lastname'
          />
        </p>
      )}
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        {...register('email', emailValidation)}
        className={errors.email ? 'input-error' : ''}
      />
      {errors.email && (
        <p className='error-message'>
          <ErrorMessage
            type={errors.email.type}
            minLength={emailValidation.minLength}
            maxLength={emailValidation.maxLength}
            field='email'
          />
        </p>
      )}
      <Input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        {...register('password', passwordValidation)}
        className={errors.password ? 'input-error' : ''}
      />
      {errors.password && (
        <p className='error-message'>
          <ErrorMessage
            type={errors.password.type}
            minLength={passwordValidation.minLength}
            maxLength={passwordValidation.maxLength}
            field='password'
          />
        </p>
      )}
      <Input
        type='password'
        name='confirm_password'
        id='confirm_password'
        placeholder='Confirm Password'
        {...register('confirm_password', {
          ...passwordValidation,
          validate: (value) => value === password || 'The passwords do not match'
        })}
        className={errors.confirm_password ? 'input-error' : ''}
      />
      {errors.confirm_password && (
        <p className='error-message'>
          {errors.confirm_password.message || (
            <ErrorMessage
              type={errors.confirm_password.type}
              minLength={passwordValidation.minLength}
              maxLength={passwordValidation.maxLength}
              field='password'
            />
          )}
        </p>
      )}
      <button type='submit' className='form-submit-btn' disabled={!formState.isValid}>
        Signup
      </button>
    </form>
  );
};

SignupForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.isRequired
  }).isRequired
};

export default withRouter(SignupForm);
