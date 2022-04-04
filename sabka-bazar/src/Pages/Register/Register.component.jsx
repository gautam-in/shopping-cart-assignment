import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="main-heading">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="signup-form">
        <form
          onSubmit={handleSubmit((data) => {
            navigate("/");
          })}
        >
          <div className={errors.FirstName ? "form-group error" : "form-group"}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              {...register("FirstName", {
                required: "First Name is Required",
              })}
            />
            <label htmlFor="firstName">First Name</label>
            {errors.FirstName && (
              <p className="error-msg">{errors.FirstName.message}</p>
            )}
          </div>
          <div className={errors.LastName ? "form-group error" : "form-group"}>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              {...register("LastName", {
                required: "Last Name is Required",
              })}
            />
            <label htmlFor="lastName">Last Name</label>
            {errors.LastName && (
              <p className="error-msg">{errors.LastName.message}</p>
            )}
          </div>
          <div className={errors.EmailId ? "form-group error" : "form-group"}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
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
          <div
            className={
              errors.ConfirmPassword ? "form-group error" : "form-group"
            }
          >
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("ConfirmPassword", {
                required: "Confirm Password is Required",
                minLength: {
                  value: 6,
                  message: "Minimum Password length should be 6.",
                },
              })}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {errors.ConfirmPassword && (
              <p className="error-msg">{errors.ConfirmPassword.message}</p>
            )}
          </div>

          <button type="submit" className="register-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
