import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

export default function Register() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Registered");
    history.push("/");
  };

  return (
    <div className="container">
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-side">
          <div className="heading">
            <h1>Sign Up</h1>
            <p>We do not share your personal details with anyone</p>
          </div>
        </div>
        <div className="right-side">
          <div className="field">
            <input
              type="text"
              name="firstname"
              id="firstname"
              {...register("firstname", { required: "First Name is Required" })}
              required
            />
            <label className="floating-label" htmlFor="firstname">
              First Name
            </label>
            <p>{errors.firstname?.message}</p>
          </div>

          <div className="field">
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              {...register("lastname", { required: "Last Name is Required" })}
            />
            <label htmlFor="lastname">Last Name</label>
            <p>{errors.lastname?.message}</p>
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </div>
          <div className="field">
            <input
              type="password"
              name="password"
              id="password"
              required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
              })}
            />
            <label htmlFor="password">Password</label>
            <p>{errors.password?.message}</p>
          </div>

          <div className="field">
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              required
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                // validate: (value) =>value === password || "The passwords do not match",
              })}
            />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <p>{errors.confirmpassword?.message}</p>
          </div>

          <button className="button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
