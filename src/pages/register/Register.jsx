import React, { useState } from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Input } from "@components/Input/Input";
import Button from "@components/Button";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMessage } from "@store/toastReducer";

const FORM_DATA = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

export function Register() {
    const { formState: { errors }, control, handleSubmit, watch } = useForm({
        defaultValues: {
            ...FORM_DATA
        },
        mode: "onChange"
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useDocumentTitle("User Registration | Sabka Bazaar");

    const onSubmit = (data) => {
        dispatch(showMessage({
            type: "success",
            message: "Successfully Registered. Please login!"
        }));
        navigate("/login");
    };

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.registerDescription}>
                <h2 className={styles.heading} data-testid="register-title">Signup</h2>
                <p className={styles.description} data-testid="register-description">We do not share your personal details with anyone.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="register-form">
                <Input
                    control={control}
                    label="First Name"
                    name="firstName"
                    type="text"
                    rules={{ required: "First Name is required" }}
                    aria-label="firstName"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-required="true"
                />
                <Input
                    control={control}
                    label="Last Name"
                    name="lastName"
                    type="text"
                    rules={{ required: "Last Name is required" }}
                    aria-label="lastName"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-required="true"
                />
                <Input
                    control={control}
                    label="Email"
                    name="email"
                    type="text"
                    rules={{
                        required: "Email Address is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    }}
                    aria-label="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-required="true"
                />
                <Input
                    control={control}
                    label="Password"
                    name="password"
                    type="text"
                    rules={{
                        required: "Password is required",
                        minLength: {
                          value: 5,
                          message: "Password minimum length is 5"
                        }
                    }}
                    aria-label="password"
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-required="true"
                />
                <Input
                    control={control}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="text"
                    rules={{
                        required: "Confirm Password is required",
                        minLength: {
                          value: 5,
                          message: "Password minimum is 5"
                        },
                        validate: (val) => {
                            if (watch('password') != val) {
                                return "Your passwords do no match";
                            }
                        },
                    }}
                    aria-label="confirmPassword"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    aria-required="true"
                />
                <div className={styles.buttonWrapper}>
                    <Button data-testid="register-submit">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}