import React from "react";
import "./LoginComponent.css";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
function LoginComponent() {
  const history = useHistory();

  return (
    <section className="login-section">
      <div className="login-section_info">
        <h1 className="login-section-heading" role="heading">
          Login
        </h1>
        <div className="login-section-desc">
          Get Access to your Orders. Wishlist and Recommendations
        </div>
      </div>
      <div className="login-section_formGroup">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
              history.push(`/`);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(6, "Password is too short - should be 6 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="login-section_form"
                aria-label="form"
              >
                <div className="field">
                  <input
                    aria-required="true"
                    aria-labelledby="email"
                    type="email"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email" id="email">
                    Email *
                  </label>
                </div>

                {errors.email && touched.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
                <div className="field">
                  <input
                    aria-required="true"
                    aria-labelledby="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password" id="password">
                    Password *
                  </label>
                </div>

                {errors.password && touched.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
                <input
                  type="submit"
                  disabled={isSubmitting}
                  className="btn--login"
                  value="Login"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

export default LoginComponent;
