import React from "react";
import "./LoginComponent.css";
import { useHistory } from "react-router-dom";

function LoginComponent() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
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
    if (data.submit) {
      const _error = {};
      if (!data.password) {
        _error.password = ["Password is required"];
      }
      if (!data.email) {
        _error.email = ["Email is required"];
      }
      if (data.email) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(data.email)) {
          _error.email = ["Email is not valid"];
        }
      }
      setError(_error);
      return Object.keys(_error).length === 0;
    } else {
      const name = event ? event.target.name : null;
      const _error = {};
      if (!data.password && name === "password") {
        _error.password = ["Password is required"];
      }
      if (!data.email && name === "email") {
        _error.email = ["Email is required"];
      }
      if (data.email && name === "email") {
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
    <section className="login-section">
      <div className="login-section_info">
        <h1 className="login-section-heading" role="heading">
          Login
        </h1>
        <div className="login-section-desc">
          Get Access to your Orders. Wishlist and Recommendations
        </div>
      </div>
      <div className="login-section_formGroup">
        <form
          onSubmit={handleSubmits}
          onKeyDown={formIsValid}
          onClickCapture={formIsValid}
          autoComplete="off"
          className="login-section_form"
          aria-label="form"
        >
          <div className="field">
            <input
              aria-required="true"
              aria-labelledby="email"
              type="email"
              name="email"
              id="email"
              placeholder="Email id"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              value={data.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" id="email">
              Email *
            </label>
          </div>
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
          <div className="field">
            <input
              aria-required="true"
              aria-labelledby="password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              minLength={6}
              required
            />
            <label htmlFor="password" id="password">
              Password *
            </label>
          </div>
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
          <input type="submit" className="btn--login" value="Login" />
        </form>
      </div>
    </section>
  );
}

export default LoginComponent;
