const handlebars = require("handlebars");

const registrationTemplate = {
  registerHelpers() {},
  generateMarkup(state) {
    this.registerHelpers();
    const template = handlebars.compile(`<div class="login">
                <div class="login__intro">
                <h1 class="heading-1 login___intro--title"> Signup </h1>
                <p class=" heading-5 login__-intro--descr"> We do not share your personal details with anyone </h1>
                </div>
                <div class="login-form">
                    <form class="registration-form" action="">
                    <div class="login-form__group">
                        <input type="text" name="fname" class="login-form__ip" id="firstname" placeholder="First Name" required aria-required="true"/>
                        <label class="login-form__label" for="firstname">First Name</label>
                    </div>
                    <div class="login-form__group">
                    <input type="text" name="lname" class="login-form__ip" id="lastname"  placeholder="Last Name" required/>
                        <label class="login-form__label" for="lname">Last Name</label>
                    </div>
                    <div class="login-form__group">
                     <label class="login-form__label" for="email" >Email</label>
                    <input type="email" aria-label="Username" name="email" class="login-form__ip" id="email"  placeholder="Email" required/>
                   
                </div>
                <div class="login-form__group">
                    <input type="password" name="passwd"  class="login-form__ip" id="password"  placeholder="Password" required  />
                    <label class="login-form__label" for="password">Password</label>
                </div>
                <div class="login-form__group">
                    <input type="password" name="confirm-password" class="login-form__ip" id="confirm-password"  placeholder="Confirm Password" required>
                    <label class="login-form__label" for="confirm-password">Confirm Password</label>
                </div>
                <div class="login-form__group">
                    <button class="login-form__ip button-2" name ="Signup" type="submit">Signup</button>
                </div>
            </form>
                </div>
            </div>`);
    //Filter and display only those items with quantity is greater than zero
    return template();
  },
};

module.exports = registrationTemplate;
