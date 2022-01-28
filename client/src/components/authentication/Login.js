import React from 'react';
import "./Login.scss";

function Login() {
  return (
    <div>
      <div className="login">
        <div className="container">
          <section className="heading">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </section>
          <section className="details">
            <form action="">
              <label>
                Email
                <input type="email" />
              </label>
              <label>
                Password
                <input type="password" />
              </label>
              <button type="submit">Login</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login;
