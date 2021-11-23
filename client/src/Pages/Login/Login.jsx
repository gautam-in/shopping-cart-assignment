import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Login.module.css";
import classNames from "classnames";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  return (
    <div className="h-screen">
      <Header />
      <div
        className={classNames(
          " h-4/5 flex sm:flex-col px-10 justify-center items-start sm:justify-start sm:items-center pt-24"
        )}
      >
        <div className="mr-24 sm:mr-0 sm:text-center">
          <h1 className="text-xl sm:text-base">Login</h1>
          <p className="sm:text-sm">
            Get access to your Orders, Wishlist & Recommendations
          </p>
        </div>
        <div>
          <div className="w-64 sm:w-48 sm:mx-auto relative sm:mt-12">
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
          </div>

          <div className="w-64 sm:w-48 sm:mx-auto relative mt-12">
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
          </div>
          <button
            className={classNames(
              styles.buttonBackground,
              "font-medium w-64 sm:w-48 p-2 mt-10"
            )}
          >
            <p className="text-white sm:text-sm">Login</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
