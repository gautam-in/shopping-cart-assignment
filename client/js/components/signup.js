export const SignUp = () => {
  return `<div class="wrapper">
    <div class="main-signup-container">
      <article class="">
        <div class="signup-container">
          <div class="signup-box">
            <div class="signup-title">
              <h1>Signup</h1>
            </div>
            <div class="signup-desc">
              <p>We do not share your personal details with anyone.</p>
            </div>
          </div>

          <div class="singup-box-form-section">
            <form action="#" method="psot" autocomplete="off">
              <div class="group">
                <input
                  type="text"
                  required="required"
                  id="fname"
                  name="fname"
                  placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>First Name</label>
              </div>
              <div class="group">
                <input
                  type="text"
                  required="required"
                  id="lname"
                  name="lname"
                  placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Last Name</label>
              </div>
              <div class="group">
                <input
                  type="email"
                  required="required"
                  id="email"
                  name="email"
                  placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
              </div>
              <div class="group">
                <input
                  type="password"
                  required="required"
                  id="password"
                  name="password"
                  placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Password</label>
              </div>
              <div class="group">
                <input
                  type="password"
                  required="required"
                  id="cpassword"
                  name="cpassword"
                  placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Confirm Password</label>
              </div>
              <div class="call-to-action">
                <input type="button" class="login" name="" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  </div>`;
};
