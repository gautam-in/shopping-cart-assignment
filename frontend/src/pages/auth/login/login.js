import Button from "../../../components/button/button";
import "./../auth.scss";
import { LoginState } from "./loginState";

const Login = () => {
  const renderButton = () => {
    return Button.render({
      id: "login-btn",
      label: `Login`,
      type: "submit",
    });
  };

  return `
     <div class="auth-container">
      <div class="auth-container__details_content">
        <h1 tabindex=0>Login</h1>
        <p tabindex=0>Get access to your Orders. Wishlist and Recommendations</p>
      </div>
      <form id="form-container" class="auth-container__action">
          <div>
            <input name="email" type="email" id="input-email" required />
            <label id="label-email" for="input-email">Email*</label>
            <span
              id="email-error"
              class="auth-container__action--error"
            ></span>
          </div>
          <div>
            <input
              name="password"
              type="password"
              id="input-password"
              minlength="6"
              required
            />
            <label id="label-password" for="input-password">Password*</label>
            <span
              id="password-error"
              class="auth-container__action--error"
            ></span>
          </div>
          <span
            id="form-error"
            class="auth-container__action--error"
          ></span>
          ${renderButton()}
          <div class='auth-container__footer-link'>Don't have an account? <a href='#/register' >Register here</a></div>
      </form>
   </div>
    `;
};

const LoginPage = {
  render: async () => Login(),
  reRender: async () => {
    const lState = new LoginState();
    return lState.reRender();
  },
};

export default LoginPage;

// const authContainer = document.createElement("div");
// const authContent = document.createElement("div");
// const authHeader = document.createElement("h1");
// const authP = document.createElement("p");
// const authForm = document.createElement("form");

// authContent.className = "auth-container__details_content";

// authHeader.tabIndex = 0;
// authHeader.innerText = "Login";

// authP.tabIndex = 0;
// authP.innerText = "Get access to your Orders. Wishlist and Recommendations";

// authContainer.className = "auth-container";
// authForm.id = "form-container";
// authForm.className = "auth-container__action";

// authContent.appendChild(authHeader);
// authContent.appendChild(authP);
// authContainer.appendChild(authContent);
// authContainer.appendChild(authForm);
