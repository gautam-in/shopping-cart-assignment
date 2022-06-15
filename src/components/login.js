import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    const regex = "^(?=.*[a-z])(?=.*d)(?=.{6,})";
    if (!this.state.password.match(regex)) {
      alert("Please match the required format");
    } else {
      this.props.history.push("/");
    }
  };

  handleChange = (e, type) => {
    if (type == "password") {
      this.setState({
        password: e.target.value,
      });
    } else {
      this.setState({
        email: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <main className="mainContainer loginMain">
          <div>
            <h1>Login</h1>
            <p>Get access to your Orders. Wishlist and Recommendations</p>
          </div>
          <form>
            <div className="form-field">
              <input
                type="email"
                className="form-field__input"
                name="email"
                id="email"
                placeholder=" "
                required
                onChange={(e) => this.handleChange(e, "email")}
              />
              <label for="email" className="form-field__label">
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
                minlength="6"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
                onChange={(e) => this.handleChange(e, "password")}
              />
              <label for="password" className="form-field__label">
                Password
              </label>
              <div className="form-field__bar"></div>
            </div>
            <button
              type="submit"
              className="btn btn--full"
              onClick={this.login}
            >
              Login
            </button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Login;
