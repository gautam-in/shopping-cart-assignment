export const Login = () => {
  return `<div class="wrapper">
    <div class="main-login-container">
        <article class="">
        <div class="login-container">
            <div class="login-box">
            <div class="login-title">
                <h1>Login</h1>
            </div>
            <div class="login-desc">
                <p>Get access to your Orders, Wishlist and Recommendation</p>
            </div>
            </div>

            <div class="login-box-form-section">
            <form action="#" method="psot" autocomplete="off">
                <div class="group">
                <input
                    type="email"
                    required="required"
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
                    name="password"
                    placeholder=""
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Password</label>
                </div>
                <div class="call-to-action">
                <input type="button" class="login" name="" value="Login" />
                </div>
            </form>
            </div>
        </div>
        </article>
    </div>
</div>`;
};
