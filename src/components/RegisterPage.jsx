import React, { Component } from 'react';
import RegisterForm from "./RegisterForm";

class RegisterPage extends Component {
  render() {
    return (
        <>
        <div className="container top-container">
          <div className="row">
              <div className="col-md-5 pd-3">
                <h1>Signup</h1>
                <br/>
                <p>
                    We do not share your personal details with anyone.
                </p>
              </div>
              <div className="col-md-5 pd-3">
                <RegisterForm />
              </div>
          </div>
        </div>
        </>
    );
  }
}

export default RegisterPage;