const handlebars = require("handlebars");

const loginTemplate = {
  registerHelpers() {},
  generateMarkup(state) {
    this.registerHelpers();
    const template = handlebars.compile(`<div class="login">
            <div class="login__intro">
            <h1 class="heading-1 login___intro--title"> Login </h1>
            <p class=" heading-5 login__-intro--descr"> Get Access to your orders wishlist and Recomendation </h1>
            </div>
            <div class="login-form">
                <form class="login-form" action="">
                
                <div class="login-form__group">
                <input type="email" name="" class="login-form__ip" id="email"  placeholder="Email" required>
                <label class="login-form__label" for="email">Email</label>
                </div>
                <div class="login-form__group">
                    <input type="password" name=""  class="login-form__ip" id="password"  placeholder="Password" required  />
                    <label class="login-form__label" for="passowrd">Password</label>
                </div>
            <div class="login-form__group">
                <button class="login-form__ip button-2" type="submit">Login</button>
            </div>
        </form>
            </div>
        </div>`);
    //Filter and display only those items with quantity is greater than zero
    return template();
  },
};

module.exports = loginTemplate;
