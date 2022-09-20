import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../signUp/FormInput";
import styles from "./SignIn.module.scss";

const formInitialValues = {
  email: "",
  password: "",
};

const Signin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(formInitialValues);
  const { email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValues(formInitialValues);
    alert("Sign In successfull");
    navigate("/");
  };

  return (
    <div className={styles.signInContainer}>
      <div className="center-box">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="center-box">
        <form method="post" action="/" onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            minLength="6"
            pattern="^[a-zA-Z0-9]*$"
          />

          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
