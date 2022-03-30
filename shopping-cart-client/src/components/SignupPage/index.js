import React, { Component } from 'react';
import './Signuppage.scss';
class SignupPage extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="signin-page-desc">
          <h1>Signin </h1>
          <p>Get Access to your Orders , Wishlist and Recommendations</p>
        </div>
        <div className="form-inputs">
          <label for="fname-inp" className="inp">
            <input type="text" id="fname-inp" placeholder="&nbsp;" />
            <span className="label">FirstName</span>
            <span className="focus-bg"></span>
          </label>
          <label for="lname-inp" className="inp">
            <input type="text" id="lname-inp" placeholder="&nbsp;" />
            <span className="label">LastName</span>
            <span className="focus-bg"></span>
          </label>

          <label for="email-inp" className="inp">
            <input type="text" id="email-inp" placeholder="&nbsp;" />
            <span className="label">Email</span>
            <span className="focus-bg"></span>
          </label>
          <label for="password-inp" className="inp">
            <input type="password" id="password-inp" placeholder="&nbsp;" />
            <span className="label">Password</span>
            <span className="focus-bg"></span>
          </label>
          <label for="cnfpassword-inp" className="inp">
            <input type="password" id="cnfpassword-inp" placeholder="&nbsp;" />
            <span className="label">Confirm Password</span>
            <span className="focus-bg"></span>
          </label>
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignupPage;
