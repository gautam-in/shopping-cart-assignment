import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import styles from './SignUp.module.scss';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {

  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    navigate('/')
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.headerContainer}>
      <h2>Signup</h2>
      <span>We do not share your personal details with anyone</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='First Name'
          type='text'
          required
          onChange={handleChange}
          name='firstName'
          value={firstName}
        />
        <FormInput
          label='Last Name'
          type='text'
          required
          onChange={handleChange}
          name='lastName'
          value={lastName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;