import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import "./Form.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/");
  };

  return (
    <div className="container">
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-side">
          <div className="heading">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
        </div>

        <div className="right-side">
          <div className="field">
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </div>
          <div className="field">
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <Button className="button" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
