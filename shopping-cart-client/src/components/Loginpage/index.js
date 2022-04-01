import React, { Component } from 'react';
import './Loginpage.scss';
class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-page-desc">
          <h1>Login </h1>
          <p>Get Access to your Orders , Wishlist and Recommendations</p>
        </div>
        <div className="form-inputs">
          <label for="email-inp" className="inp">
            <input type="text" id="email-inp" placeholder="&nbsp;" />
            <span className="label">Email</span>
            <span className="focus-bg"></span>
          </label>
          <label for="passeord-inp" className="inp">
            <input type="password" id="password-inp" placeholder="&nbsp;" />
            <span className="label">Password</span>
            <span className="focus-bg"></span>
          </label>
          <button className="login-button">Login</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
