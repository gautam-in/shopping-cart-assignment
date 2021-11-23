import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Registration.module.css";
import classNames from "classnames";
import validator from "validator";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const alert = useAlert();
  const navigate = useNavigate();

  const validation = () => {
    const errors = [];
    const { firstName, email, password, confirmPassword } = data;
    if (!firstName) {
      errors.push({ name: "firstName", message: "First name is mandatory" });
    }
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
    if (password && confirmPassword && password !== confirmPassword) {
      errors.push({
        name: "confirmPassword",
        message: "Passwords don't match",
      });
    }
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!validation()) return;
    const { email, password } = data;
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert.success("Registered successfully");
    navigate("/login");
  };

  const showErrors = (type) => {
    const error = errors.filter((item) => item?.name === type);
    console.log(error);
    return error[0]?.message;
  };

  return (
    <div className="">
      <Header />
      <div
        className={classNames(
          "flex h-screen sm:flex-col px-48 sm:px-8 justify-start items-start sm:justify-start sm:items-center pt-32 sm:pt-24 "
        )}
      >
        <div className="mr-24 sm:mr-0 sm:text-center">
          <h1 className="text-xl sm:text-xs">Signup</h1>
          <p className="sm:text-xs">
            We do not share your personal details with anyone
          </p>
        </div>
        <form onSubmit={(e) => handleSumbit(e)}>
          <div className="w-72 sm:w-48 sm:mx-auto relative sm:mt-4">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="text"
              name="firstName"
              id="firstName"
              value={data?.firstName}
              onChange={(e) =>
                setData({ ...data, firstName: e?.target?.value })
              }
            />

            <label
              for="firstName"
              className={classNames(
                styles.label,
                "font-semibold",
                data?.firstName && styles.movedLabel
              )}
            >
              First Name
            </label>
            {showErrors("firstName") && (
              <span className="text-xs text-red-700">
                {showErrors("firstName")}
              </span>
            )}
          </div>
          <div className="w-72 sm:w-48 sm:mx-auto relative mt-12">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="text"
              name="lastName"
              id="lastName"
              value={data?.lastName}
              onChange={(e) => setData({ ...data, lastName: e?.target?.value })}
            />
            <label
              for="lastName"
              className={classNames(
                styles.label,
                "font-semibold",
                data?.lastName && styles.movedLabel
              )}
            >
              Last Name
            </label>
          </div>
          <div className="w-72 sm:w-48 sm:mx-auto relative mt-12">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="email"
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

          <div className="w-72 sm:w-48 sm:mx-auto relative mt-12">
            <input
              className={classNames(styles.input, "w-full text-base")}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={data?.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e?.target?.value })
              }
            />
            <label
              for="confirmPassword"
              className={classNames(
                styles.label,
                "font-semibold",
                data?.confirmPassword && styles.movedLabel
              )}
            >
              Confirm Password
            </label>
            {showErrors("confirmPassword") && (
              <span className="text-xs text-red-700">
                {showErrors("confirmPassword")}
              </span>
            )}
          </div>
          <button
            className={classNames(
              styles.buttonBackground,
              "font-medium w-72 sm:w-48 p-2 mt-12"
            )}
          >
            <p className="text-white sm:text-sm">Signup</p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
