import React from 'react'

import './Login-signup.css'


function Signup() {
  return (
    <section className="main-container">
    <aside className="aside signup-container">
      <h1>Signup</h1>
      <p>Get access to your Orders, Wishlist and Recommendations!</p>
    </aside>
    <main className="login-form signup-container">
      <form action="#" method="post">
        {/* <label for="fname">First Name</label>  */}
        <input
          className="input"
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name"
          
        />
        {/* <label for="lname">Last Name</label>  */}
        <input
          className="input"
          type="text"
          name="lname"
          id="lname"
          placeholder="Last Name"
        />
        {/* <label for="email">Email</label>  */}
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        {/* <label for="password">Password</label>  */}
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        {/* <label for="password">Confirm Password</label>  */}
        <input
          className="input"
          type="password"
          name="password"
          id="cpassword"
          placeholder="confirm password"
        />
        <input className="input" type="submit" value="Signup" />
      </form>
    </main>
  </section>
  )
}

export default Signup