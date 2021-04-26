import React, { useState, useEffect } from 'react'
import RegisterForm from "../Molecules/RegisterForm";

const RegisterPage = () => {
    useEffect(() => {
      document.title = 'Signup - Sabka Bazar'
  }, []);
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

export default RegisterPage;