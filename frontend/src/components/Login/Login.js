import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Logged In successfully");
    history.push("/");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-side">
          <div className="heading">
            <h1>Sign Up</h1>
            <p>We do not share your personal details with anyone</p>
          </div>
        </div>
        <div className="right-side">
          <div className="field">
            <input
              type="email"
              name="email"
              id=""
              required
              {...register("email", { required: "Email is required" })}
            />
            <label htmlFor="">Email</label>
            <p>{errors.email?.message}</p>
          </div>
          {/* <p>{errors.email?.message}</p> */}
          <div className="field">
            <input
              type="password"
              name="password"
              id="password"
              required
              {...register("password", { required: "Password is required" })}
            />
            <label htmlFor="password">Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <button className="button" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
