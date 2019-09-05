import {
  elements
} from './base'

export const renderLogin = () => {
  const markup = `
    <section class="login">
      <div class="login-left">
        <h3>Login</h3>
        <span>Get Access to your Orders, Wishlists, & Recommendations</span>
      </div>
      <div class="login-right">
        <div class="container-input">
          <form>
            <div class="group">
              <input id="login-username" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <input id="login-password" type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <button id="login-Submit">Submit</input>
          </form>
        </div>
    </section>
    `
  elements.landingPage.mainContent.innerHTML = markup
  addElements()
}

const addElements = () => {
  elements.loginPage = {
    userForm: document.querySelector('.container-input'),
    userNameInput: document.querySelector('#login-username'),
    passwordInput: document.querySelector('#login-password'),
    submitButton: document.querySelector('#login-Submit')
  }
}
