import {
  elements
} from './base';

export const renderLogin = () => {
  const markup = `
  <div id="main-block">
    <section class="login">
      <div class="login-left">
        <h3>Login</h3>
        <span>Get Access to your Orders, Wishlists, & Recommendations</span>
      </div>
      <div class="login-right">
        <div class="container-input">
          <form>
            <div class="group">
              <input type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <input type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <button>Submit</input>
          </form>
        </div>
    </section>
  </div>
</div>
    `;
  elements.mainBlock.innerHTML = markup;
};
