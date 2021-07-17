import { memo } from 'react';
import { InputStyle } from './styles/InputStyle';
import { SigninStyle } from './styles/SigninStyle';
import { ButtonStyle } from './styles/GlobalStyles';

function Signin() {
  return (
    <SigninStyle>
      <div>
        <h2>Signup</h2>
        <p>We do not share yur personal details with anyone.</p>
      </div>
      <div>
        <form>
          <fieldset>
            {/* put aria-invalid for = true for the errors */}
            <InputStyle>
              <input type="text" required />
              <span>First Name</span>
            </InputStyle>
            <InputStyle>
              <input type="text" required />
              <span>Last Name</span>
            </InputStyle>
            <InputStyle>
              <input type="email" required />
              <span>Email</span>
            </InputStyle>
            <InputStyle>
              <input type="password" required />
              <span>Password</span>
            </InputStyle>
            <InputStyle>
              <input type="password" required />
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

export default memo(Signin);
