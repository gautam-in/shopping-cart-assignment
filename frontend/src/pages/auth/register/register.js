import Alert from "../../../components/alert";
import Button from "../../../components/button/button";
import "./../auth.scss";
import { RegisterState } from "./registerState";

const Register = () => {
  return `
         <div class="auth-container">
          <div class="auth-container__details_content">
            <h1 tabindex=0>Signup</h1>
            <p tabindex=0>We do not share your personal details with anyone.</p>
          </div>
          <div>
            ${Alert("Register Successful!")}
            <form id="form-container" class="auth-container__action">
              <div>
                <input type="text" id="input-fname" name='fname' required />
                <label id='fname-label' for="input-fname">First Name*</label>
                <span
                  id="input-fname-error"
                  class="auth-container__action--error"
                ></span>
              </div>
              <div>
                <input type="text" id="input-lname" name='lname' />
                <label for="input-lname">Last Name</label>
                <span
                  id="input-lname-error"
                  class="auth-container__action--error"
                ></span>
              </div>
              <div>
                <input type="email" id="input-email" required name='email' />
                <label for="input-email">Email*</label>
                <span
                  id="input-email-error"
                  class="auth-container__action--error"
                ></span>
              </div>
              <div>
                <input type="password" id="input-password" name='password'  minlength="6" required />
                <label for="input-password">Password*</label>
                <span
                  id="input-password-error"
                  class="auth-container__action--error"
                ></span>
              </div>
              <div>
                <input type="password" id="input-confirm-password" name='confirm-password' minlength="6" required />
                <label for="confirm-password">Confirm Password*</label>
                <span
                  id="input-confirm-password-error"
                  class="auth-container__action--error"
                ></span>
              </div>
              <span
                id="form-error"
                class="auth-container__action--error"
              ></span>
              ${Button.render({
                id: "register-btn",
                label: "Signup",
                type: "submit",
              })}
              </form>
              <div class='auth-container__footer-link'>Already have an account? <a href='/'>Login here</a></div>
              </div>
        </div>
`;
};

const RegisterPage = {
  privateRoute: false,
  render: async () => Register(),
  reRender: async () => {
    const rState = new RegisterState();
    return rState.reRender();
  },
};

export default RegisterPage;
