import { memo } from 'react';
import useForm from '../lib/useForm';
import { InputStyle } from './styles/InputStyle';
import { SigninStyle } from './styles/SigninStyle';
import { ButtonStyle } from './styles/GlobalStyles';

function Signin() {
  const { inputs, handleChange, errors, signinSubmit } = useForm({
    email: '',
    password: '',
  });

  console.log(errors);
  return (
    <SigninStyle>
      <div>
        <h2>Login</h2>
        <p>Get acces to your Orders, Wishlist and Recommendations</p>
      </div>
      <div>
        <form onSubmit={signinSubmit} method="POST">
          <fieldset>
            {/* put aria-invalid for = true for the errors */}
            <InputStyle error={errors?.email || false}>
              <input
                type="text"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                aria-invalid={errors?.email || false}
                required
              />
              <span>Email</span>
            </InputStyle>
            <InputStyle error={errors?.password || false}>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                aria-invalid={errors?.password || false}
                required
              />
              <span>Password</span>
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

export default memo(Signin);
