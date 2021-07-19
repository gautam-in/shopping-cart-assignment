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
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                required
              />
              <span>First Name</span>
            </InputStyle>
            <InputStyle>
              <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                required
              />
              <span>Last Name</span>
            </InputStyle>
            <InputStyle>
              <input
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                autoComplete="username"
                required
              />
              <span>Email</span>
            </InputStyle>
            <InputStyle>
              <input
                type="password"
                name="password"
                value={inputs.passowrd}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <span>Password</span>
            </InputStyle>
            <InputStyle>
              <input
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <span>Confirm Password</span>
            </InputStyle>
            <ButtonStyle
              type="submit"
              style={{ width: '50%', margin: '2em 0' }}
            >
              Submit
            </ButtonStyle>
          </fieldset>
          <div role="alert">errors</div>
        </form>
      </div>
    </SigninStyle>
  );
}

export default memo(Register);
