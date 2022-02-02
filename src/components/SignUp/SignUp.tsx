import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./styles.scss";

const SignUp = ({ authUser, registerUser }) => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const [show, setShow] = useState(false);
  const [dialogMsg, setDialogMsg] = useState("");
  const [isexist, setExists] = useState(false);

  const handleDialog = () => {
    setShow(!show);
    if (show && !isexist) {
      navigate("/sign-in");
    }
  };

  const onSubmit = (data, e) => {
    console.log({ data, authUser });
    const { registeredUser = {} } = authUser || {};
    e.preventDefault();
    if (!Object.keys(registeredUser).includes(data.email)) {
      registerUser(data);
      navigate("/sign-in");
    } else {
      setDialogMsg(`User '${data.email}' already exists!!`);
      setExists(true);
    }
    handleDialog();
  };

  return (
    <div className="lr-wrapper">
      <div>
        <div className="heading">Signup</div>
        <div className="description">
          We do not share your personal details with anyone
        </div>
      </div>
      <div className="lr-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <b>{"First Name"}</b>
            </label>
            <input
              {...register("fname", {
                required: true,
                minLength: 1,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder={"First Name"}
              type="text"
              autoFocus
            />
            {errors.fname && <span>Firstname is required</span>}
          </div>
          <div>
            <label>
              <b>{"Last Name"}</b>
            </label>
            <input
              {...register("lname", {
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder={"Last Name"}
              type="text"
            />
          </div>
          <div>
            <label>
              <b>{"Email"}</b>
            </label>
            <input
              {...register("email", { required: true })}
              placeholder={"Email"}
              type="email"
              autoFocus
            />
            {errors.email && <span>Email is required</span>}
          </div>
          <div>
            <label>
              <b>{"Password"}</b>
            </label>
            <input
              {...register("password", { required: true, minLength: 8 })}
              placeholder={"Password"}
              type="password"
            />
            {errors.password && (
              <span>Password length should be minimum of 8 characters</span>
            )}
          </div>
          <div>
            <label>
              <b>{"Confirm Password"}</b>
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              placeholder={"Confirm Password"}
              type="password"
            />
            {errors.confirmPassword && (
              <span>Confirm Password should match with Password</span>
            )}
          </div>
          <Button type="primary" htmlType="submit" className="theme-col tac">
            Signup
          </Button>
        </form>
        <div className="lr-msg">
          If you have an account already, please{" "}
          <Link to="/sign-in">Log In</Link>
        </div>
      </div>
      {/* <Modal handleClose={handleDialog} show={show}>
          {dialogMsg}
        </Modal> */}
      <h3>{dialogMsg}</h3>
    </div>
  );
};

export default SignUp;
