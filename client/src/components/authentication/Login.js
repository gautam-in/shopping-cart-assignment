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
              <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Email' required />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required />
              </div>
              <button type="submit">Login</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login;
