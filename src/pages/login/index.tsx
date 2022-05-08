import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './index.scss';

const Login = () => {
    const history = useHistory();

    const onSubmit = useCallback(
        (values, { setSubmitting }) => {
            setTimeout(() => {
                console.log('Logging in', values);
                setSubmitting(false);
                history.push(`/`);
            }, 500);
        },
        [history],
    );

    return (
        <section className="login-section">
            <div className="login-section_info">
                <h1 className="login-section-heading">Login</h1>
                <div className="login-section-desc">Get Access to your Orders. Wishlist and Recommendations</div>
            </div>
            <div className="login-section_formGroup">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={onSubmit}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email().required('Email is required'),
                        password: Yup.string()
                            .required('Password is required')
                            .min(6, 'Password is too short - should be 6 chars minimum.')
                            .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
                    })}>
                    {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
                        return (
                            <form
                                onSubmit={handleSubmit}
                                autoComplete="off"
                                className="login-section_form"
                                aria-label="form">
                                <div className="field">
                                    <input
                                        aria-required="true"
                                        aria-labelledby="email"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <label htmlFor="email" id="email">
                                        Email *
                                    </label>
                                </div>

                                {errors.email && touched.email && <span className="error-text">{errors.email}</span>}
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
                                    <span className="error-text">{errors.password}</span>
                                )}
                                <input type="submit" disabled={isSubmitting} className="btn--login" value="Login" />
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </section>
    );
};

export default Login;
