import React, { Component } from "react";
import Input from "../component/input/input.component";
import Button from "../component/button/button.component";
import "./register.styles.scss";

const registerFields = [
  { label: "First Name", type: "firstName" },
  { label: "Last Name", type: "lastName" },
  { label: "Email", type: "email" },
  { label: "Password", type: "password" },
  { label: "Confirm Password", type: "confirmPassword" },
];

const loginFields = [
  { label: "Email", type: "email" },
  { label: "Password", type: "password" },
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { isFrom } = this.props;
    const isFromLogin = isFrom === "login";
    let fields = registerFields;
    if (isFromLogin) {
      fields = loginFields;
    }
    return (
      <div className="register-container">
        <div className="register-fields">
          <h2>{isFromLogin ? "Login" : "Signup"}</h2>
          <p>
            {isFromLogin
              ? "Get access to Your Orders. Wishlist and Recommendation"
              : "We do not share your personal details with anyone."}
          </p>
        </div>
        <div className="register-fields">
          {fields.map((field, index) => (
            <Input
              label={field.label}
              key={`key=${index}`}
              value={this.state[field.type]}
              name={field.type}
              type={
                field.type.toLocaleLowerCase().includes("password")
                  ? "password"
                  : "text"
              }
              onChange={this.handleChange}
            />
          ))}

          <Button type="button">{isFromLogin ? "Login" : "Signup"}</Button>
        </div>
      </div>
    );
  }
}

export default Register;
