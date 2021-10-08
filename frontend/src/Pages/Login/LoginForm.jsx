import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "../../Components/ButtonPrimary/ButtonPrimary";
import { getLocalStorage } from "../../Helper/loginFunc";
import "./LoginStyles.scss";

const LoginForm = () => {
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [commonErr, setCommonErr] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    let loginDetails = localStorage.getItem(email);
    loginDetails = JSON.parse(loginDetails);
    if (password !== loginDetails?.password) {
      setCommonErr("Invalid Login Credentials");
      return;
    }
    localStorage.setItem("user", email);
    history.push("/");
  };

  useEffect(() => {
    const user = getLocalStorage();
    if (user) history.push("/");
  }, [history.location.pathname, history]);

  return (
    <section className="login-content-section">
      <div className="login-container">
        <div className="login-desc">
          <h2 className="login-label">Login</h2>
          <div className="login-text">Get access to your Orders, Wishlist & Recommendations</div>
        </div>
        <div className="login-form">
          <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,5}$/,
                    message: "Email is not valid",
                  },
                }}
                render={({ field }) => (
                  <TextField {...field} type="email" label="Email" />
                )}
              />
              {errors.email && (
                <span className="err-msg">{errors.email.message}</span>
              )}
            </div>
            <div className="form-field">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  }
                }}
                render={({ field }) => (
                  <TextField {...field} type="password" label="Password" />
                )}
              />
              {errors.password && (
                <span className="err-msg">{errors.password.message}</span>
              )}
            </div>
            {commonErr && <div className="common-err">{commonErr}</div>}
            <div className="form-field">
              <Button title="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
