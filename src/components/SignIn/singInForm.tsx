import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
const SingIn = ({ loginUser, authUser }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isAuthenticated, error, errorMsg } = authUser || {};
  const [show, setShow] = useState(false);
  const handleDialog = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const onSubmit = (data) => {
    const { registeredUser } = authUser || {};

    if (data && data.email) {
      loginUser({ ...data, registeredUser });
    } else {
      handleDialog();
    }
  };

  return (
    <div className="lr-wrapper">
      <div>
        <div className="heading">Login</div>
        <div className="description">
          Get aacess to your Orders, Wishlists and Recommendations
        </div>
      </div>
      <div className="lr-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <b>Email</b>
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              autoFocus
            />
            {errors.email && <span>Email is required</span>}
          </div>
          <div>
            <label>
              <b>Password</b>
            </label>
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
            />
            {errors.password && <span>Password is required</span>}
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="theme-col tac mb16 mt16"
          >
            Login
          </Button>
          {error && <div className="error-msg warning-color">{errorMsg}</div>}
        </form>
        <div className="lr-msg">
          If you dont't have an account already, please{" "}
          <Link to="/register">SignUp </Link>
        </div>
      </div>
      {/* <Modal handleClose={handleDialog} show={show}>
      {"Invalid credentials. Please enter correct credentials!!"}
   </Modal> */}
    </div>
  );
};

export default SingIn;
