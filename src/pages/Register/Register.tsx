import React from "react";
import "./Register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="register__header">
        <h2>Sign Up</h2>
        <p>We do not share your personal data with anyone</p>
      </div>
      
      <div className="register__form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="firstname" id="firstname" type="text" placeholder="Firstname" autoFocus={true} />
            <input name="lastname" id="lastname" type="text" placeholder="Lastname" />
            <input name="email" id="email" type="email" placeholder="Email" />
            <input name="password" id="password" type="password" placeholder="Password" />
            <input name="confirm-password" id="confirm-password" type="password" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
      </div>
    </div>)
}
