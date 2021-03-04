import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { LOGIN_SIGNUP_MSG } from '../constant';

const RagisterComp = () => {
    const history = useHistory();
    return (
        <div className="login-section">
            <div className="inner-login-section floatcontainer">
                <div className="left-sec">
                    <h2>{LOGIN_SIGNUP_MSG.SIGNUP_TEXT} </h2>
                    <div className="description">{LOGIN_SIGNUP_MSG.SIGNUP_DESCRIPTION}</div>
                    {/* label file */}
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
                                setSubmitting(false);
                                history.push(`/`);
                            }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                            // all the string should comes from constant file
                            firstName: Yup.string()
                                .required(LOGIN_SIGNUP_MSG.FIRSTNAME_REQUIRED)
                                .min(3, LOGIN_SIGNUP_MSG.FIRSTNAME_MINCHAR),
                            lastName: Yup.string()
                                .required(LOGIN_SIGNUP_MSG.LASTNAME_REQUIRED)
                                .min(1, LOGIN_SIGNUP_MSG.LASTNAME_MINCHAR),
                            email: Yup.string().email().required(LOGIN_SIGNUP_MSG.EMAIL_REQUIREED),
                            password: Yup.string()
                                .required(LOGIN_SIGNUP_MSG.PASSWORD_REQUIREED)
                                .min(6, LOGIN_SIGNUP_MSG.PASSWORD_MINCHAR)
                                .matches(/(?=.*[0-9])/, LOGIN_SIGNUP_MSG.PASSWORD_NUMBER),
                            confirmPassword: Yup.string()
                                .required(LOGIN_SIGNUP_MSG.CONFIRM_PASSWORD_REQUIRED)
                                .min(6, LOGIN_SIGNUP_MSG.CONFIRM_PASSWORD_MINCHAR)
                                .matches(/(?=.*[0-9])/, LOGIN_SIGNUP_MSG.CONFIRM_PASSWORD_NUMBER)
                                .oneOf([Yup.ref("password"), null], LOGIN_SIGNUP_MSG.CONFIRM_PASSWORD_MATCH),
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
                                    aria-label="form">
                                    <div className="input-group field">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            aria-label="Enter your first name" />
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