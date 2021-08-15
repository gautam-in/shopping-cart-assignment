/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { memo } from 'react';
import useForm from '../lib/useForm';
import { InputStyle } from './styles/InputStyle';
import { SigninStyle } from './styles/SigninStyle';
import { ButtonStyle } from './styles/GlobalStyles';

function Register() {
  const { inputs, handleChange, errors, registerSubmit } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <SigninStyle>
      <Head>
        <title> Register - Sabka Bazaar - Online Grocery Store</title>
      </Head>
      <div>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div>
        <form onSubmit={registerSubmit} method="POST">
          <fieldset>
            {/* put aria-invalid for = true for the errors */}
            <InputStyle>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </InputStyle>
            <InputStyle>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </InputStyle>
            <InputStyle error={errors?.email || false}>
              <input
                id="email"
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                autoComplete="username"
                required
              />
              <label htmlFor="email">Email</label>
            </InputStyle>
            <InputStyle
              error={errors?.password || errors?.confirmPassword || false}
            >
              <input
                id="password"
                type="password"
                name="password"
                value={inputs.passowrd}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <label htmlFor="password">Password</label>
            </InputStyle>
            <InputStyle error={errors?.confirmPassword || false}>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </InputStyle>
            <ButtonStyle
              type="submit"
              style={{ width: '50%', margin: '2em 0' }}
            >
              Submit
            </ButtonStyle>
          </fieldset>
          <div role="alert">
            <ul>
              {errors &&
                Object.entries(errors).map((item, index) => (
                  <li key={index}>{item[1]}</li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    </SigninStyle>
  );
}

export default memo(Register);
