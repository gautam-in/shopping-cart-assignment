import React from "react";
import "./LoginComponent.css";
import { useHistory } from "react-router-dom";

function RegisterComponent() {
  const [data, setData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    submit: false,
  });
  const [error, setError] = React.useState({});
  const history = useHistory();
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmits = async (event) => {
    event.preventDefault();
    data.submit = true;

    if (!formIsValid()) return;
    history.push(`/`);
  };
  function formIsValid(event) {
    const name = event ? event.target.name : null;
    if (!data.submit) {
      const _error = {};
      if (!data.first_name && name === "first_name") {
        _error.first_name = ["The first name field is required"];
      }
      if (data.first_name && name === "first_name") {
        //checks empty string
        if (!data.first_name.trim().length) {
          _error.first_name = ["Enter Valid First Name"];
        }

        //min / max regex
        var minmaxRegex = /^.{3,100}$/;
        if (!minmaxRegex.test(data.first_name)) {
          if (data.first_name.length <= 2) {
            _error.first_name = ["Minimum 3 characters allowed"];
          }
          if (data.first_name.length >= 100) {
            _error.first_name = ["Maximum 50 characters allowed"];
          }
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(data.first_name)) {
          _error.first_name = ["Enter Valid First Name"];
        }
        //show error if user enters number
        let reg2 = /^([^0-9]*)$/;
        if (!reg2.test(data.first_name)) {
          _error.first_name = ["Enter Valid First Name"];
        }
      }

      if (data.last_name && name === "last_name") {
        //checks empty string
        if (!data.last_name.trim().length) {
          _error.last_name = ["Enter Valid Last Name Name"];
        }
        //min / max regex
        var minmaxRegex = /^.{3,100}$/;
        if (!minmaxRegex.test(data.last_name)) {
          if (data.last_name.length >= 50) {
            _error.last_name = ["Maximum 100 characters allowed"];
          }
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(data.last_name)) {
          _error.last_name = ["Enter Valid Last Name Name"];
        }
        //show error if user enters number
        let reg2 = /^([^0-9]*)$/;
        if (!reg2.test(data.last_name)) {
          _error.last_name = ["Enter Valid Last Name Name"];
        }
      }

      if (!data.password && name === "password") {
        _error.password = ["Password is required"];
      }
      if (!data.password_confirmation && name === "password_confirmation") {
        _error.password_confirmation = ["Confirm Password is required"];
      }
      if (data.password_confirmation && name === "password_confirmation") {
        if (data.password !== data.password_confirmation) {
          _error.password_confirmation = ["Password does not match"];
        }
      }
      if (!data.email && name === "email") {
        _error.email = ["The email field is required"];
      }
      if (data.email && name === "email") {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(data.email)) {
          _error.email = ["Email is not valid"];
        }
      }
      if (data.password) {
        let reg = /^\S+$/;
        if (!reg.test(data.password)) {
          _error.password = ["password should not have space"];
        }
      }
      if (data.password_confirmation) {
        let reg = /^\S+$/;
        if (!reg.test(data.password_confirmation)) {
          _error.password_confirmation = ["password should not have space"];
        }
      }

      setError(_error);
      return Object.keys(_error).length === 0;
    } else {
      //If submit true
      const _error = {};
      if (!data.first_name) {
        _error.first_name = ["The first name field is required"];
      }
      if (data.first_name && name === "first_name") {
        //checks empty string
        if (!data.first_name.trim().length) {
          _error.first_name = ["Enter Valid First Name"];
        }
        //min / max regex
        var minmaxRegex = /^.{3,100}$/;
        if (!minmaxRegex.test(data.first_name)) {
          if (data.first_name.length <= 2) {
            _error.first_name = ["Minimum 3 characters allowed"];
          }
          if (data.first_name.length >= 100) {
            _error.first_name = ["Maximum 50 characters allowed"];
          }
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(data.first_name)) {
          _error.first_name = ["Enter Valid First Name"];
        }
        //show error if user enters number
        let reg2 = /^([^0-9]*)$/;
        if (!reg2.test(data.first_name)) {
          _error.first_name = ["Enter Valid First Name"];
        }
      }

      if (data.last_name && name === "last_name") {
        //checks empty string
        if (!data.last_name.trim().length) {
          _error.last_name = ["Enter Valid Last Name"];
        }
        //min / max regex
        var minmaxRegex = /^.{3,100}$/;
        if (!minmaxRegex.test(data.last_name)) {
          if (data.last_name.length >= 50) {
            _error.last_name = ["Maximum 100 characters allowed"];
          }
        }
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(data.last_name)) {
          _error.last_name = ["Enter Valid Last Name"];
        }
        //show error if user enters number
        let reg2 = /^([^0-9]*)$/;
        if (!reg2.test(data.last_name)) {
          _error.last_name = ["Enter Valid Last Name"];
        }
      }

      if (!data.password) {
        _error.password = ["Password is required"];
      }
      if (data.password) {
        let reg = /^\S+$/;
        if (!reg.test(data.password)) {
          _error.password = ["password should not have space"];
        }
      }
      if (!data.password_confirmation) {
        _error.password_confirmation = ["Confirm Password is required"];
      }
      if (data.password_confirmation && name === "password_confirmation") {
        if (data.password !== data.password_confirmation) {
          _error.password_confirmation = ["Password does not match"];
        }
      }
      if (data.password_confirmation) {
        let reg = /^\S+$/;
        if (!reg.test(data.password_confirmation)) {
          _error.password_confirmation = ["password should not have space"];
        }
      }
      if (!data.email) {
        _error.email = ["The email field is required"];
      }
      if (data.email) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(data.email)) {
          _error.email = ["Email is not valid"];
        }
      }
      setError(_error);
      return Object.keys(_error).length === 0;
    }
  }
  return (
    <section className="signup-section">
      <div className="signup-section_info">
        <h1 className="login-section-heading">Signup</h1>
        <div className="login-section-desc">
          We do nto share your personal details anywhere.
        </div>
      </div>
      <div className="login-section_formGroup">
        <form
          onSubmit={handleSubmits}
          onKeyDown={formIsValid}
          onClickCapture={formIsValid}
          autoComplete="off"
          className="signup-section_form"
          aria-label="form"
        >
          <div className="field">
            <input
              type="text"
              name="first_name"
              id="firstname"
              placeholder="First Name"
              required
              value={data.first_name}
              onChange={handleChange}
            />
            <label htmlFor="firstname" id="firstname">
              Firstname *
            </label>
          </div>
          {error.first_name && (
            <span style={{ color: "red" }}>{error.first_name}</span>
          )}
          <div className="field">
            <input
              type="text"
              name="last_name"
              id="lastname"
              placeholder="Last Name"
              value={data.last_name}
              onChange={handleChange}
            />
            <label htmlFor="lastname" id="lastname">
              Lastname
            </label>
          </div>
          {error.last_name && (
            <span style={{ color: "red" }}>{error.last_name}</span>
          )}
          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email id"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
              value={data.email}
              onChange={handleChange}
            />
            <label htmlFor="email" id="email">
              Email *
            </label>
          </div>
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
          <div className="field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              minLength={6}
              value={data.password}
              onChange={handleChange}
            />
            <label htmlFor="password" id="password">
              Password *
            </label>
          </div>
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}

          <div className="field">
            <input
              type="password"
              name="password_confirmation"
              id="confirm-password"
              placeholder="Confirm Password"
              required
              minLength={6}
              value={data.password_confirmation}
              onChange={handleChange}
            />
            <label htmlFor="confirm-password" id="confirm-password">
              Confirm Password *
            </label>
          </div>
          {error.password_confirmation && (
            <span style={{ color: "red" }}>{error.password_confirmation}</span>
          )}
          <input
            type="submit"
            className="btn--signup"
            name="submit"
            value="SignUp"
          />
        </form>
      </div>
    </section>
  );
}

export default RegisterComponent;
