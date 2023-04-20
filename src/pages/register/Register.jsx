import React, { useState } from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Input } from "@components/Input/Input";
import Button from "@components/Button";
import styles from "./Register.module.scss";
import { useForm } from "react-hook-form";

const FORM_DATA = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

export function Register() {
    const { formState: { errors }, control, handleSubmit } = useForm({
        defaultValues: {
            ...FORM_DATA
        },
        mode: "onChange"
    });
    useDocumentTitle("User Registration | Sabka Bazaar");

    const onSubmit = (data) => {};

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
                />
                <Input
                    control={control}
                    label="Last Name"
                    name="lastName"
                    type="text"
                    rules={{ required: "Last Name is required" }}
                    aria-label="lastName"
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                <Input
                    control={control}
                    label="Email"
                    name="email"
                    type="text"
                    rules={{ required: "Email Address is required" }}
                    aria-label="email"
                    aria-invalid={errors.email ? "true" : "false"}
                />
                <Input
                    control={control}
                    label="Password"
                    name="password"
                    type="text"
                    rules={{ required: "Password is required" }}
                    aria-label="password"
                    aria-invalid={errors.password ? "true" : "false"}
                />
                <Input
                    control={control}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="text"
                    rules={{ required: "Confirm Password is required" }}
                    aria-label="confirmPassword"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                <div className={styles.buttonWrapper}>
                    <Button data-testid="register-submit">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}