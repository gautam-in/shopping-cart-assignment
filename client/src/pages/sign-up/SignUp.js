
import Input from "../../components/input/Input";
import { Fragment, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './singup.css'
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

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
      <div className="signUpContainer">
        <div className="signUpWrapper">
          <div className="signUpTitleContainer">
            <h1>Sign Up</h1>
            <p>Get acces to your order and wishlist</p>
          </div>
          <div className="signUpInputContainer">
            <form onSubmit={handleSubmit} className="form">
              <Input
                label="firstName"
                type="firstName"
                onChange={handleChange}
                required="true"
                value={form.firstName}
                name="firstName"
              />
              <Input
                label="lastName"
                type="lastName"
                required="true"
                onChange={handleChange}
                value={form.lastName}
                name="lastName"
              />

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

              <Input
                label="confirmPassword"
                type="confirmPassword"
                required="true"
                onChange={handleChange}
                value={form.confirmPassword}
                name="confirmPassword"
              />
              <button type="submit" className="signUpButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SignUp;
