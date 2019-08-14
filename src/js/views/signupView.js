import {
  elements
} from './base';

export const renderSignup = () => {
  const markup = `
  <div id="main-block">
    <section class="register">
      <div class="register-left">
        <h3>Signup</h3>
        <span>We do not share your personal details with anyone</span>
      </div>
      <div class="register-right">
        <div class="container-input">
          <form>
            <div class="group">
              <input type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>First Name</label>
            </div>
            <div class="group">
              <input type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Last Name</label>
            </div>
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
            <div class="group">
              <input type="text" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Confirm Password</label>
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
