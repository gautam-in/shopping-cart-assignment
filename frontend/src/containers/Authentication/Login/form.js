import React from "react";
import styled from "styled-components";

const Field = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
const Button = styled.button`
  margin-top: 20px;
  width: 100%;
`;
const Error = styled.h3`
  font-weight: bold;
  margin-top: 20px;
  text-aligm: center;
  color: red;
`;
class Form extends React.Component {
  state = {
    email: null,
    password: null,
  };

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = async () => {
    try {
      let data = {
        email: this.state.email,
        password: this.state.password,
      };
      //post request
      const result = await fetch(
        "http://localhost:3000/user/?email=" +
          data.email +
          "&password=" +
          data.password
      );
      const userData = await result.json();
      if (userData && userData.length > 0) {
        alert("Login Successful");
      } else {
        this.setState({
          error: "Email or Password is Wrong",
        });
      }
    } catch (error) {
      this.setState({
        error,
      });
    }
  };

  render() {
    return (
      <form
        action="javascript:void(0);"
        onSubmit={this.onSubmitHandler}
        method="post"
      >
        <Field>
          <input
            type="email"
            value={this.state.email}
            className="form_field"
            onChange={this.onChangeHandler}
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email" className="form_label">
            Email
          </label>
        </Field>
        <Field>
          <input
            type="password"
            value={this.state.password}
            className="form_field"
            onChange={this.onChangeHandler}
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password" className="form_label">
            Password
          </label>
        </Field>
        <Button type="submit">Login</Button>
        {this.state.error && <Error>{this.state.error}</Error>}
      </form>
    );
  }
}

export default Form;
