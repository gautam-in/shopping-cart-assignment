import React, { useState, useEffect } from 'react'
import LoginForm from "../Molecules/LoginForm";

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Login - Sabka Bazar'
    }, []);
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

export default LoginPage;