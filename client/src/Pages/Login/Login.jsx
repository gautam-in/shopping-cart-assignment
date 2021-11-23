import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Login.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { useAlert } from "react-alert";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const alert = useAlert();

  const validation = () => {
    const errors = [];
    const { email, password } = data;
    if (!validator.isEmail(email)) {
      errors.push({
        name: "email",
        message: "Email is not valid",
      });
    }
    if (!password) {
      errors.push({
        name: "password",
        message: "Password is mandatory",
      });
    }

    setErrors(errors);
    return errors.length === 0;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    const { email, password } = data;
    let userDetails = JSON.parse(localStorage.getItem("user"));
    if (email !== userDetails?.email || password !== userDetails?.password) {
      alert.error("Invalid Credentials");
      return;
    }
    navigate("/");
  };

  const showErrors = (type) => {
    const error = errors.filter((item) => item?.name === type);
    return error[0]?.message;
  };

  return (
    <div className="h-screen">
      <Header />
      <div
        className={classNames(
          "flex sm:flex-col px-48 sm:px-10 justify-start items-start sm:justify-start sm:items-center pt-24"
        )}
      >
        <div className="mr-24 sm:mr-0 sm:text-center">
          <h1 className="text-xl sm:text-base">Login</h1>
          <p className="sm:text-sm">
            Get access to your Orders, Wishlist & Recommendations
          </p>
        </div>
        <form onSubmit={(e) => handleSumbit(e)}>
          <div className="w-72 sm:w-48 sm:mx-auto relative sm:mt-12">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="text"
              name="email"
              id="email"
              value={data?.email}
              onChange={(e) => setData({ ...data, email: e?.target?.value })}
            />
            <label
              for="email"
              className={classNames(
                styles.label,
                "font-semibold",
                data?.email && styles.movedLabel
              )}
            >
              Email
            </label>
            {showErrors("email") && (
              <span className="text-xs text-red-700">
                {showErrors("email")}
              </span>
            )}
          </div>

          <div className="w-72 sm:w-48 sm:mx-auto relative mt-12">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="password"
              name="password"
              id="password"
              value={data?.password}
              onChange={(e) => setData({ ...data, password: e?.target?.value })}
            />
            <label
              for="password"
              className={classNames(
                styles.label,
                "font-semibold",
                data?.password && styles.movedLabel
              )}
            >
              Password
            </label>
            {showErrors("password") && (
              <span className="text-xs text-red-700">
                {showErrors("password")}
              </span>
            )}
          </div>
          <button
            className={classNames(
              styles.buttonBackground,
              "font-medium w-72 sm:w-48 p-2 mt-10"
            )}
          >
            <p className="text-white sm:text-sm">Login</p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
