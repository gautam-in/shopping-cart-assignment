import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/footer/footer";

function LoginForm() {
  const initialValue = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
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
      navigate("/");
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regx.test(values.email)) {
      errors.email = "This is not valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  return (
    <>
      <div className="formContainer">
        <div className="leftSection">
          <p>Signup</p>
          <p>We do not share your personal details with anyone</p>
        </div>
        <div className="rightSection">
          <form onSubmit={handleSubmit} noValidate="novalidate">
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
              <button type="submit" className="btn-cls submitbtn">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginForm;
