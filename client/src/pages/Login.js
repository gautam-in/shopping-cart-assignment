import React from 'react'

import './Login-signup.css'



function Login() {

  return (
    <section className="main-container">
    <aside className="aside container">
      <h1>Login</h1>
      <p>Get access to your Orders, Wishlist and Recommendations!</p>
    </aside>
    <main className="login-form container">
      <form action="#" method="post">
        <label for="email">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <label for="password">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <input className="input" type="submit" value="Login" />
      </form>
    </main>
  </section>
  )
}

export default Login