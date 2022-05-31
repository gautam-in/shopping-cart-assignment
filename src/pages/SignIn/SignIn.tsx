import React from "react";
import "./SignIn.scss";

export const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__header">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>

      <div className="signin__form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="email" id="email" type="text" placeholder="Email" autoFocus={true} />
            <input name="password" id="password" type="text" placeholder="Password" />
            <button>Sign In</button>
          </form>
      </div>
    </div>
  )
}