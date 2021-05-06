import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';
import ErrorMessage from '../../atoms/ErrorMessage';
import { emailValidation, passwordValidation } from '../../atoms/validation';
import '../../../styles/Form.scss';

const LoginForm = ({ history }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
    history.push('/');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        autoFocus
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
      <button type='submit' className='form-submit-btn' disabled={!formState.isValid}>
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.isRequired
  }).isRequired
};

export default withRouter(LoginForm);
