import React, { Component } from 'react';
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  render() {
    return (
        <>
        <div className="container top-container">
          <div className="row">
              <div className="col-md-5 pd-3">
                <h1>Login</h1>
                <br/>
                <p>
                    Get access to your Orders Wishlist and Recommendations.
                </p>
              </div>
              <div className="col-md-5 pd-3">
                <LoginForm />
              </div>
          </div>
        </div>
        </>
    );
  }
}

export default LoginPage;