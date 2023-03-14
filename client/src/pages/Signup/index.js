import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './signup.module.scss';

export const Signup = () => {
  const navigate = useNavigate();
  const [passError, setPassError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  /**
   * It checks if the password and confirm password are the same. If they are not, it sets the password
   * error to 'Passwords are not matching'. If they are the same, it sets the password error to false and
   * navigates to the signin page.
   * @param data - The data that was submitted.
   * @returns The onSubmit function is being returned.
   */
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPassError('Passwords are not matching');
      return;
    }
    setPassError(false);
    localStorage.setItem('registeredUser', JSON.stringify(data));
    toast('User registered successfully');
    navigate('/signin');
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupcontent}>
        <h1>Signup</h1>
        <p>We do not share your personal information with anyone</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          First Name
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          aria-required="true"
          {...register('firstName', { required: true, maxLength: 80 })}
        />
        <span>{errors.firstName?.type && 'You must enter your First name'}</span>

        <label htmlFor="lastName">
          Last Name
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          aria-required="true"
          {...register('lastName', { required: true, maxLength: 80 })}
        />
        <span>{errors.lastName?.type && 'You must enter your Last name'}</span>

        <label htmlFor="email">
          Email
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          name="email"
          aria-required="true"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <span>{errors.email?.type && 'You must enter a valid email'}</span>

        <label htmlFor="password">
          Password
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="password"
          name="password"
          aria-required="true"
          {...register('password', { required: true })}
        />
        <span>{errors.password?.type && 'You must enter a Password'}</span>

        <label htmlFor="confirmPassword">
          Confirm Password
          <span aria-hidden="true">*</span>
        </label>
        <input
          type="confirmPassword"
          name="confirmPassword"
          aria-required="true"
          {...register('confirmPassword', { required: true })}
        />
        <span>{errors.confirmPassword?.type && 'You must enter the Comfirm Password'}</span>
        <span>{passError}</span>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
