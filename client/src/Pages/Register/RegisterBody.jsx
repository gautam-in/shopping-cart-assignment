/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getLocalStorage } from "../../Helper/loginFunc";

import "./Body.scss";
import Button from "../../Components/ButtonPrimary/ButtonPrimary";

export default () => {
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [commonErr, setCommonErr] = useState("");

  const onSubmit = (data) => {
    setCommonErr("");
    if (data.password != data.confirmPassword) {
      setCommonErr("Password must be same.");
      return;
    }
    delete data.confirmPassword;
    localStorage.setItem(data.email, JSON.stringify(data));
    // localStorage.setItem("user", data.email);
    history.push("/");
  };

  useEffect(() => {
    const user = getLocalStorage();
    if (user) history.push("/");
  }, [history.location.pathname]);

  return (
    <section className="section-registerbody height-100-perc">
      <div className="main-container height-100-perc">
        <div className="description">
          <h2>Signup</h2>
          <div>We do not share your personal details with anyone</div>
        </div>

        <div className="form-body">
          <form className="right-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "First Name is required",
                }}
                render={({ field }) => (
                  <TextField {...field} label="First Name" />
                )}
              />
              {errors.first_name && (
                <span className="err-msg">{errors.first_name.message}</span>
              )}
            </div>
            <div className="form-field">
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "Last Name is required",
                }}
                render={({ field }) => (
                  <TextField {...field} label="Last Name" />
                )}
              />
              {errors.last_name && (
                <span className="err-msg">{errors.last_name.message}</span>
              )}
            </div>
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
                  },
                }}
                render={({ field }) => (
                  <TextField {...field} type="password" label="Password" />
                )}
              />
              {errors.password && (
                <span className="err-msg">{errors.password.message}</span>
              )}
            </div>
            <div className="form-field">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Confirm Password must have at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    label="Confirm Password"
                  />
                )}
              />
              {errors.confirm_password && (
                <span className="err-msg">
                  {errors.confirm_password.message}
                </span>
              )}
              {commonErr && <div className="common-err">{commonErr}</div>}
            </div>
            <div className="form-field mar-top-20">
              <Button title="Signup" />
              {/* <input type="submit" value="Signup" /> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
