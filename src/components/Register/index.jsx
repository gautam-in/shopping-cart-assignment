import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <section className="signup">
        <div className="signup-header">
          <h1>Sign Up</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="signup-form">
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button>Sign Up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
