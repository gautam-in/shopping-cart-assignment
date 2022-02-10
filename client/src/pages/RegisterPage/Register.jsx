import React from "react";
import "./../LoginPage/Form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../../components/Button/Button";

function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters."),
    confirmpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password must match."
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    alert("Registered");
    navigate("/");
  };

  return (
    <div className="container">
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-side">
          <div className="heading">
            <h1>Sign Up</h1>
            <p>We do not share your personal details with anyone.</p>
          </div>
        </div>

        <div className="right-side">
          <div className="field">
            <input
              {...register("firstname", {
                required: "First Name is required",
                minLength: 1,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              id="firstname"
              required
            />
            <label htmlFor="firstname">First Name</label>
            <p>{errors.firstname?.message}</p>
          </div>

          <div className="field">
            <input
              {...register("lastname", {
                required: "Last Name is required",
                minLength: 1,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              id="lastname"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <p>{errors.lastname?.message}</p>
          </div>

          <div className="field">
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </div>

          <div className="field">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              type="password"
              id="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>

            <p>{errors.password?.message}</p>
          </div>

          <div className="field">
            <input
              {...register("confirmpassword", {
                required: "Password and Confirm Password must match.",
              })}
              type="password"
              id="confirmpassword"
              autoComplete="off"
              required
            />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <p>{errors.confirmpassword?.message}</p>
          </div>

          <Button className="button" type="submit">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
