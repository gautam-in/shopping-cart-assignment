import React, { useEffect } from "react";
import classes from "./SignInPage.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { userStatus } from "../../Redux/cred";
import { useDispatch, useSelector } from "react-redux";
export default function SignInPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  let authorizedData = useSelector((state) => state.userList.userCredentials);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmission = (SignINdata) => {
    const inputData = SignINdata.email.trim();
    const inputPass = SignINdata.password.trim();
    const storeCredEmail = authorizedData.find(
      (user) => user.email === inputData
    );
    const storeCredPass = authorizedData.find(
      (user) => user.password === inputPass
    );

    if (storeCredEmail && storeCredPass) {
      dispatch(
        userStatus({
          isLoggedIn: true,
        })
      );
      history.push("/");
    } else {
      if (storeCredEmail !== inputData) {
        alert("Incorrect Username");
      } else {
        alert("Incorrect Password");
      }
    }
  };

  useEffect(() => {
    document.title = "S B | Signin";
  }, []);

  return (
    <div className={classes.Container}>
      <section className={classes.PrimaryContainer}>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>
      <section className={classes.SecondaryContainer}>
        <form
          className={classes.Form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmission)}
        >
          <div className={classes.InputContainer}>
            <input
              id="email"
              className={classes.Input}
              name="email"
              type="email"
              {...register("email")}
              required
              autoComplete="off"
              placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label className={classes.Label} htmlFor="email">
              Email
            </label>
          </div>
          <div className={classes.InputContainer}>
            <input
              id="password"
              className={classes.Input}
              name="password"
              autoComplete="off"
              type="password"
              {...register("password")}
              required
              placeholder="Password"
            />
            <label className={classes.Label} htmlFor="password">
              Password
            </label>
          </div>

          <div className={classes.InputContainer}>
            <button type="submit" className={classes.Button}>
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
