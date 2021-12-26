import React, { Component } from "react";
import FormField from "../bits/formField";
import AButton from "../bits/aButton";
import { auth } from "../firebase/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <form>
          <FormField
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormField
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="btn-wrapper">
            <AButton type="submit" onClick={this.handleSubmit}>
              {" "}
              Sign In{" "}
            </AButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
