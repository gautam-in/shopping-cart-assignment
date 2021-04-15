import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import { EMAIL_REGEX_PATTERN } from "../../utility/RegexEmailPattern";

const INITIAL_FORM = {
  userName: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState(INITIAL_FORM);

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = { ...INITIAL_FORM };

    // email validation
    if (form.email.match(EMAIL_REGEX_PATTERN)) {
      formErrors.email = "";
    } else {
      formErrors.email = "Invalid Email!";
    }

    // error checking
    const hasError = Object.values(formErrors).every(
      (item) => item.trim() === ""
    );
    if (!hasError) {
      setError({ ...formErrors });
      return;
    }
    history.push("/home");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return (
    <div>
      <div className="col-md-10 mx-auto login-container">
        <div className="row pt-5">
          <div className="col-md-7">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <div className="col-md-5">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className={`form-control ${error.email ? "error" : ""}`}
                  required
                  value={form.email}
                  onChange={handleInputChange}
                  autoFocus={true}
                />
                <label htmlFor="email">Email</label>
                {error.email && (
                  <span className="form-error">{error.email}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <Button type="submit" variant="primary" className="btn-block">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
