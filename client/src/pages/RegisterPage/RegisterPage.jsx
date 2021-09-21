import React, { useEffect, useState } from "react";
import classes from "./RegisterPage.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { userCred } from "../../Redux/cred";
import { useDispatch, useSelector } from "react-redux";
export default function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  let presentEmail = useSelector((state) => state.userList.userCredentials);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmission = (data) => {
    setLoading(true);
    const storeCred = presentEmail.find(
      (user) => user.email === data.email.trim()
    );

    if (storeCred) {
      alert("You are already registered with this email kindly login ");
      history.push("/signin");
    } else {
      dispatch(
        userCred({
          id: new Date().getMilliseconds(),
          email: data.email.trim(),
          password: data.password.trim(),
        })
      );
      alert("Congrats ! You are Registered");
      setLoading(false);

      history.push("/signin");
    }
  };

  useEffect(() => {
    document.title = "S B | Register";
  }, []);

  return (
    <div className={classes.Container}>
      <section className={classes.PrimaryContainer}>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </section>
      <section className={classes.SecondaryContainer}>
        <form
          className={classes.Form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmission)}
        >
          <fieldset
            style={{ border: "none" }}
            disabled={loading}
            aria-busy={loading}
          >
            <div className={classes.InputContainer}>
              <input
                className={classes.Input}
                id="fname"
                {...register("fname")}
                type="text"
                required
                autoComplete="off"
                placeholder="First Name"
              />
              <label className={classes.Label} htmlFor="fname">
                First Name
              </label>

              <p>{errors.fname?.message}</p>
            </div>
            <div className={classes.InputContainer}>
              <input
                id="lname"
                className={classes.Input}
                {...register("lname")}
                type="text"
                autoComplete="off"
                required
                placeholder="Last Name"
              />
              <label className={classes.Label} htmlFor="lname">
                Last Name
              </label>
            </div>
            <div className={classes.InputContainer}>
              <input
                id="email"
                className={classes.Input}
                type="email"
                {...register("email")}
                required
                autoComplete="off"
                placeholder="Email"
              />

              <label className={classes.Label} htmlFor="email">
                Email
              </label>
            </div>
            <div className={classes.InputContainer}>
              <input
                id="password"
                className={classes.Input}
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
              <input
                id="passwordConfirmation"
                className={classes.Input}
                autoComplete="off"
                type="password"
                {...register("passwordConfirmation", {
                  required: "Please confirm password!",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  },
                })}
                required
                placeholder="Confirm Password"
              />
              <label className={classes.Label} htmlFor="Repassword">
                Confirm Password
              </label>
              {errors.passwordConfirmation && (
                <p style={{ color: "red" }}>
                  {errors.passwordConfirmation.message}
                </p>
              )}
            </div>
            <div className={classes.InputContainer}>
              <button type="submit" className={classes.Button}>
                Signup
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
