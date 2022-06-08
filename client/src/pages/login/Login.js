import "./login.css";
import Input from "../../components/input/Input";
import { Fragment, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prevForm) => {
      return { ...prevForm, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  return (
    <Fragment>
  
      <div className="loginContainer">
        <div className="loginWrapper">
          <div className="loginTitleContainer">
            <h1>Login</h1>
            <p>Get acces to your order and wishlist</p>
          </div>
          <div className="loginInputContainer">
            <form onSubmit={handleSubmit} className="form">
              <Input
                label="email"
                type="email"
                onChange={handleChange}
                required="true"
                value={form.email}
                name="email"
              />
              <Input
                label="password"
                type="password"
                required="true"
                onChange={handleChange}
                value={form.password}
                name="password"
              />
              <button type="submit" className="loginButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </Fragment>
  );
};
export default Login;
