import { Button } from "@material-ui/core";
import { useState } from "react";
import Form from "../styles/Form";
import SignUpStyles from "../styles/signUp";
import useForm from "../utils/useForm";
import ErrorMsg from "./ErrorMessage";

function SignUpPage(props) {

    const { inputs, handleChange, errors } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleSubmit(e) {
        e.preventDefault();

    }
    const passwordMismatch = inputs.password != inputs.confirmPassword ? 'Password mismatch' : "";
    const inValidForm = errors.firstName || errors.lastName || errors.email || errors.password || errors.confirmPassword || passwordMismatch

    return (
        <SignUpStyles>
            <div style={{ margin: 'auto' }}>
                <h1>Sign Up</h1>
                <p>We do not share your personal details with anyone</p>
            </div>
            <Form method="POST" onSubmit={handleSubmit}>
                {/* <DisplayError error="hello"></DisplayError> */}
                <fieldset>
                    <ErrorMsg message={errors.firstName} />
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={inputs.firstName}
                        onChange={handleChange}

                    />
                    <ErrorMsg message={errors.lastName} />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={inputs.lastName}
                        onChange={handleChange}

                    />
                    <ErrorMsg message={errors.email} />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email Address"
                        value={inputs.email}
                        onChange={handleChange}

                    />
                    <ErrorMsg message={errors.password} />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    <ErrorMsg message={errors.confirmPassword} />
                    <ErrorMsg message={passwordMismatch} />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={inputs.confirmPassword}
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        type="submit"
                        disabled={inValidForm}
                    >Signup</Button>
                </fieldset>
            </Form>
        </SignUpStyles>
    )
}
export default SignUpPage