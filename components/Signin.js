import { memo } from 'react';
import { InputStyle } from './styles/InputStyle';
import { SigninStyle } from './styles/SigninStyle';
import { ButtonStyle } from './styles/GlobalStyles';

function Signin() {
  return (
    <SigninStyle>
      <div>
        <h2>Login</h2>
        <p>Get acces to your Orders, Wishlist and Recommendations</p>
      </div>
      <div>
        <form>
          <fieldset>
            {/* put aria-invalid for = true for the errors */}
            <InputStyle>
              <input type="email" required />
              <span>Email</span>
            </InputStyle>
            <InputStyle>
              <input type="password" required />
              <span>Password</span>
            </InputStyle>
            <ButtonStyle
              type="submit"
              style={{ width: '50%', margin: '2em 0' }}
            >
              Submit
            </ButtonStyle>
          </fieldset>
          <div role="alert">&nbps;</div>
        </form>
      </div>
    </SigninStyle>
  );
}

export default memo(Signin);
