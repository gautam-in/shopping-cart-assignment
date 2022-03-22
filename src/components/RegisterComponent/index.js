import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import "../LoginComp/LoginComp.scss";

const RegisterComponent = () => {
  const history = useHistory();

  return (
    <section className="signup-section">
      <div className="signup-section_info">
        <h1 className="login-section-heading">Signup</h1>
        <div className="login-section-desc">
          We do not share your personal details anywhere.
        </div>
      </div>
      <div className="login-section_formGroup">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
              history.push(`/`);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .required("required field")
              .min(3, "First Name is too short - should be 3 chars minimum."),
            lastName: Yup.string()
              .required("required field")
              .min(1, "Last Name is too short - should be 1 chars minimum."),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .required("required field")
              .min(6, "Password is too short - should be 6 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
            confirmPassword: Yup.string()
              .required("required field")
              .min(
                6,
                "Confirm Password is too short - should be 6 chars minimum."
              )
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
                className="signup-section_form"
                aria-label="form"
              >
                <div className="field">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    // placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="firstName" id="firstName">
                    First Name
                  </label>
                </div>
                {errors.firstName && touched.firstName && (
                  <span style={{ color: "red" }}>{errors.firstName}</span>
                )}
                <div className="field">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    // placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="lastName" id="lastName">
                    Last Name
                  </label>
                </div>
                {errors.lastName && touched.lastName && (
                  <span style={{ color: "red" }}>{errors.lastName}</span>
                )}
                <div className="field">
                  <input
                    name="email"
                    id="email"
                    type="text"
                    // placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email" id="email">
                    Email
                  </label>
                </div>
                {errors.email && touched.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    // placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password" id="password">
                    Password
                  </label>
                </div>
                {errors.password && touched.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}

                <div className="field">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    // placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="confirmPassword" id="confirmPassword">
                    Confirm Password
                  </label>
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                )}
                <input
                  type="submit"
                  className="btn--signup"
                  disabled={isSubmitting}
                  name="submit"
                  value="SignUp"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default RegisterComponent;