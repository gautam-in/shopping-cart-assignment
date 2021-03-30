import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const INITIAL_FORM = {
  email: "",
  password: "",
};
function Login() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user =
      window.localStorage.getItem("user") &&
      JSON.parse(window.localStorage.getItem("user"));
    if (user && user.email === form.email && user.password === form.password) {
      setError("");
      window.localStorage.setItem(
        "access-token",
        JSON.stringify(user.email + Date.now())
      );
      history.push("/home");
    } else {
      setError("The Username or Password is incorrect.");
    }
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return (
    <div className="col-md-10 mx-auto">
      <div className="row pt-5">
        <div className="col-md-7">
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="col-md-5">
          {error && <div className="alert">{error}</div>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                required
                value={form.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
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
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
