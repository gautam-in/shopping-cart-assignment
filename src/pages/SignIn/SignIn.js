import React from "react";
import "./SignIn.scss";

export default function SignIn() {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="signin">
      <div className="signin-text">
        <h1>Login</h1>
        <p>Get access to your orders, wishlist and recommedations</p>
      </div>
      <div className="signin-action">
        <form onSubmit={onFormSubmit} className="signin-action-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
}
