import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { EMAIL_REGEX } from "../../constants";
import { getLoginStart } from "./LoginActions";

const INITIAL_FORM = {
  email: "",
  password: "",
};
function Login() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(INITIAL_FORM);

  const { isError = false } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("register")) {
      setRegister(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = { ...INITIAL_FORM };

    // email validation
    if (form.email.match(EMAIL_REGEX)) {
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
    dispatch(getLoginStart(form));
    history.push("/home");
    setError(INITIAL_FORM);
    setForm(INITIAL_FORM);
    formErrors = { ...INITIAL_FORM };
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return (
    <div className="col-md-10 mx-auto login-container">
      <div className="row pt-5">
        <div className="col-md-7">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="col-md-5">
          {isError && (
            <div className="alert">Invalid Username or Password </div>
          )}
          {register && (
            <div className="alert success">
              Your Registration Completed Successfully.
            </div>
          )}
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
              {error.email && <span className="form-error">{error.email}</span>}
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
  );
}

export default Login;
