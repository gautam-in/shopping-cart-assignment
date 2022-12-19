import React, { useState, useEffect } from "react";
import Footer from "../../components/common/footer/footer";
// import { useNavigate } from "react-router-dom";
import "./signupForm.scss";

function SignUpForm() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  // const navigate = useNavigate();
  const [formFields, setFormFields] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formFields));
    setSubmit(true);
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submit) {
      // navigate("/");
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regx.test(values.email)) {
      errors.email = "This is not valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password entered did not match!";
    }
    return errors;
  };

  return (
    <>
      <div className="formContainer">
        <div className="leftSection">
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div className="rightSection">
          <form onSubmit={handleSubmit} noValidate="novalidate">
            <div>
              <input
                type="text"
                name="firstName"
                required
                onChange={handleChange}
              />
              <label htmlFor="firstName">
                <span>First Name</span>
              </label>
              <p className="error">{errors.firstName}</p>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                required
                onChange={handleChange}
              />
              <label htmlFor="lastName">
                <span>Last Name</span>
              </label>
              <p className="error">{errors.lastName}</p>
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">
                <span>Email</span>
              </label>
              <p className="error">{errors.email}</p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
              <label htmlFor="password">
                <span>Password</span>
              </label>
              <p className="error">{errors.password}</p>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                required
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">
                <span>Confirm Password</span>
              </label>
              <p className="error">{errors.confirmPassword}</p>
            </div>
            <div>
              <button type="submit" className="btn-cls submitbtn">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpForm;
