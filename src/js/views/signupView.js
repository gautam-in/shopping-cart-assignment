import {
  elements
} from './base';

export const renderSignup = () => {
  const markup = `
    <section class="register">
      <div class="register-left">
        <h3>Signup</h3>
        <span>We do not share your personal details with anyone</span>
      </div>
      <div class="register-right">
        <div class="container-input">
          <form>
            <div class="group">
              <input id="signup-firstName" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>First Name</label>
            </div>
            <div class="group">
              <input id="signup-lastName" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Last Name</label>
            </div>
            <div class="group">
              <input id="signup-email" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <input id="signup-password" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <div class="group">
              <input id="signup-confirmPassword" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Confirm Password</label>
            </div>
            <button id="signup-submit">Submit</input>
          </form>
        </div>
    </section>
  </div>
    `;
  elements.landingPage.mainContent.innerHTML = markup;
  addElements();
};

const addElements = () => {
  elements.signUpPage = {
    userForm: document.querySelector('.container-input'),
    firstNameInput: document.querySelector('#signup-firstName'),
    lastNameInput: document.querySelector('#signup-lastName'),
    email: document.querySelector('#signup-email'),
    password: document.querySelector('#signup-password'),
    confirmPassword: document.querySelector('#signup-confirmPassword'),
    submitButton: document.querySelector('#signup-submit')
  };
};
