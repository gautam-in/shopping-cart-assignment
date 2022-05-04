import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userCredentials, setUserCredentials] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      userCredentials;
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("Invalid Email");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password do not match");
      return;
    }
    const savedUserCredentials = JSON.parse(
      localStorage.getItem("userCredentials")
    );
    if (savedUserCredentials && email === savedUserCredentials.email) {
      setErrorMessage("User already registered");
      return;
    }
    localStorage.setItem(
      "userCredentials",
      JSON.stringify({ firstName, lastName, email, password })
    );
    setSuccessMessage("User successfully registed, Now SignIn");
  };
  return (
    <>
      <div className="registercontainer">
        <div className="container">
          <div className="registerheading">Signup</div>
          <div className="registerdescription">
            we do not share personal details with anyone
          </div>
        </div>
        <div className="registerform">
          <form onSubmit={handleSubmit}>
            <div className="emailBox">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={userCredentials.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailBox">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={userCredentials.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailBox">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userCredentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailBox">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={userCredentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailBox">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={userCredentials.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {errorMessage && <div className="signup-error">{errorMessage}</div>}
            {successMessage && (
              <div className="signup-success">{successMessage}</div>
            )}
            <button type="submit" className="registerbutton">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
