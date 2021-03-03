import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
const RagisterComp = () => {
    const history = useHistory();
    return (
        <div className="login-section">
            <div className="inner-login-section floatcontainer">
                <div className="left-sec">
                    <h2>Signup</h2>
                    <div className="description">We do not share your personal details with anyone.</div>
                </div>
                <div className="right-sec">
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
                            .required("First Name is required")
                            .min(3, "First Name is too short - should be 3 chars minimum."),
                            lastName: Yup.string()
                            .required("Last Name is required")
                            .min(1, "Last Name is too short - should be 1 chars minimum."),
                            email: Yup.string().email().required("Email is required"),
                            password: Yup.string()
                            .required("Password is required")
                            .min(6, "Password is too short - should be 6 chars minimum.")
                            .matches(/(?=.*[0-9])/, "Password must contain a number."),
                            confirmPassword: Yup.string()
                            .required("Confirm Password is required")
                            .min(6,"Confirm Password is too short - should be 6 chars minimum.")
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
                                <div className="input-group field">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter your first name"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="firstName" id="firstName">
                                        First Name *
                                    </label>
                                </div>
                                {errors.firstName && touched.firstName && (
                                <span style={{ color: "red" }}>{errors.firstName}</span>
                                )}
                                <div className="input-group field">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter your last name"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="lastName" id="lastName">
                                        Last Name*
                                    </label>
                                </div>
                                {errors.lastName && touched.lastName && (
                                <span style={{ color: "red" }}>{errors.lastName}</span>
                                )}
                                <div className="input-group field">
                                    <input
                                        name="email"
                                        id="email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter your email"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="email" id="email">
                                        Email *
                                    </label>
                                </div>
                                {errors.email && touched.email && (
                                <span style={{ color: "red" }}>{errors.email}</span>
                                )}
                                <div className="input-group field">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter the password"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="password" id="password">
                                        Password *
                                    </label>
                                </div>
                                {errors.password && touched.password && (
                                <span style={{ color: "red" }}>{errors.password}</span>
                                )}

                                <div className="input-group field">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Confirm your password"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="confirmPassword" id="confirmPassword">
                                        Confirm Password *
                                    </label>
                                </div>
                                {errors.confirmPassword && touched.confirmPassword && (
                                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                                )}
                                <button
                                type="submit"
                                className="btn--signup"
                                disabled={isSubmitting}
                                name="submit"
                                value="SignUp"
                                >SignUp</button>
                            </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default RagisterComp;