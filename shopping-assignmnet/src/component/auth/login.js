import React from "react";
import Header from "../common/view/header";
import "../../app/assets/css/login.css";

const Login = () => (
  <React.Fragment>
    <Header />
    <main className="container">
      <div>
        <h1>Login</h1>
        <p>Get access to your Orders. Wishlist and RecommendationsLogin</p>
      </div>
      <form>
        <div className="form-field">
          <input
            type="email"
            className="form-field__input"
            name="email"
            id="email"
            placeholder=" "
          />
          <label htmlFor="email" className="form-field__label">
            Email
          </label>
          <div className="form-field__bar"></div>
        </div>
        <div className="form-field">
          <input
            type="password"
            className="form-field__input"
            name="password"
            id="password"
            placeholder=" "
          />
          <label htmlFor="password" className="form-field__label">
            Password
          </label>
          <div className="form-field__bar"></div>
        </div>
        <button className="btn btn--full">Login</button>
      </form>
    </main>
  </React.Fragment>
);
export default Login;
