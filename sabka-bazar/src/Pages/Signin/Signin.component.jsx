import React from "react";
import "./Signin.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  return (
    <div className="signin">
      <div className="main-heading">
        <h1>Login</h1>
        <p>Get access to your Orders, Whishlist and Recommendations.</p>
      </div>
      <div className="signin-form">
        <form
          onSubmit={handleSubmit((data) => {
            navigate("/");
          })}
        >
          <div className={errors.EmailId ? "form-group error" : "form-group"}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={getValues().EmailId}
              {...register("EmailId", {
                required: "Email Id is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <label htmlFor="email">Email</label>
            {errors.EmailId && (
              <p className="error-msg">{errors.EmailId.message}</p>
            )}
          </div>
          <div className={errors.Password ? "form-group error" : "form-group"}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("Password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Minimum Password length should be 6.",
                },
              })}
            />
            <label htmlFor="password">Password</label>
            {errors.Password && (
              <p className="error-msg">{errors.Password.message}</p>
            )}
          </div>
          <button type="submit" className="signin-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
