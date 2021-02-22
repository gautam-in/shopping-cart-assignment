import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../../shared/utility";
import classes from "../Authentication.css";

const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});

    const inputChangedHandler = (e, id) => {
        switch (id) {
            case "firstName":
                setFirstName(e.target.value);
                const errFirstName = {
                    [id]: {
                        required: checkValidity({ required: true, }, e.target.value),
                    }
                }
                setError(updateObject(error, errFirstName));
                break;
            case "lastName":
                setLastName(e.target.value);
                const errLastName = {
                    [id]: {
                        required: checkValidity({ required: true, }, e.target.value),
                    }
                }
                setError(updateObject(error, errLastName));
                break;
            case "email":
                setEmail(e.target.value);
                const errEmail = {
                    [id]: {
                        required: checkValidity({ required: true, }, e.target.value),
                        isEmail: checkValidity({ isEmail: true }, e.target.value),
                    }
                }
                setError(updateObject(error, errEmail));
                break;
            case "password":
                setPassword(e.target.value);
                const errPassword = {
                    [id]: {
                        required: checkValidity({ required: true, }, e.target.value),
                        isPassword: checkValidity({ isPassword: true }, e.target.value),
                    }
                }
                setError(updateObject(error, errPassword));
                break;
            case "confirmPassword":
                setConfirmPassword(e.target.value);
                const errConfirmPassword = {
                    [id]: {
                        required: checkValidity({ required: true, }, e.target.value),
                        isConfirmPassword: checkValidity({ isConfirmPassword: true, value: password }, e.target.value),
                    }
                }
                setError(updateObject(error, errConfirmPassword));
                break;
            default:
        }
    }
    const valiateForm = () => {
        const obj = {};
        if (firstName === "") {
            obj.firstName = {
                required: false,
            }
            obj.isValid = false;
        }
        if (lastName === "") {
            obj.lastName = {
                required: false,
            }
            obj.isValid = false;
        }
        if (email === "") {
            obj.email = {
                required: false,
            }
            obj.isValid = false;
        }
        if (password === "") {
            obj.password = {
                required: false,
            }
            obj.isValid = false;
        }
        if (confirmPassword === "") {
            obj.confirmPassword = {
                required: false,
            }
            obj.isValid = false;
        }
        if (error.firstName && error.firstName.required
            && error.lastName && error.lastName.required
            && error.email && error.email.required && error.email.isEmail
            && error.password && error.password.required && error.password.isPassword
            && error.confirmPassword && error.confirmPassword.required && error.confirmPassword.isConfirmPassword) {
            obj.isValid = true;
        }
        setError(updateObject(error, obj));
        return obj.isValid;
    }
    const submitHandler = (event) => {
        event.preventDefault();
        valiateForm() && props.history.push("/home");
    };
    let errmsg = {};
    let formInfo = (<div className={classes.AuthInfoWapper}>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
    </div>);

    if (error.firstName && !error.firstName.required) {
        errmsg.firstName = "First Name is Required";
    }
    if (error.lastName && !error.lastName.required) {
        errmsg.lastName = "Last Name is Required";
    }
    if (error.email && !error.email.required) {
        errmsg.email = "Email is Required";
    } else if (error.email && !error.email.isEmail) {
        errmsg.email = "Please Enter valid Email";
    }
    if (error.password && !error.password.required) {
        errmsg.password = "Password is Required";
    } else if (error.password && !error.password.isPassword) {
        errmsg.password = "Please Enter valid Password";
    }
    if (error.confirmPassword && !error.confirmPassword.required) {
        errmsg.confirmPassword = "Confirm Password is Required";
    } else if (error.confirmPassword && !error.confirmPassword.isConfirmPassword) {
        errmsg.confirmPassword = "Password does not match";
    }

    return (<div className={classes.Auth}>
        {formInfo}
        <form className={classes.FormWapper} onSubmit={submitHandler} novalidate="" >
            <div className={classes.Input}>
                {/* <label className={classes.Label}>{"First Name"}</label> */}
                <input
                    className={classes.InputElement}
                    type="firstName"
                    value={firstName}
                    placeholder={"First Name"}
                    id="firstName"
                    onChange={(event) => inputChangedHandler(event, "firstName")}
                    required
                />
                <div className={classes.errorMsg}>{errmsg.firstName}</div>
            </div>
            <div className={classes.Input}>
                {/* <label className={classes.Label}>{"Last Name"}</label> */}
                <input
                    className={classes.InputElement}
                    type="lastName"
                    value={lastName}
                    placeholder={"Last Name"}
                    id="lastName"
                    onChange={(event) => inputChangedHandler(event, "lastName")}
                    required
                />
                <div className={classes.errorMsg}>{errmsg.lastName}</div>
            </div>
            <div className={classes.Input}>
                {/* <label className={classes.Label}>{"Email"}</label> */}
                <input
                    className={classes.InputElement}
                    type="email"
                    value={email}
                    placeholder={"Email"}
                    id="email"
                    onChange={(event) => inputChangedHandler(event, "email")}
                    required
                />
                <div className={classes.errorMsg}>{errmsg.email}</div>
            </div>
            <div className={classes.Input}>
                {/* <label className={classes.Label}>{"Password"}</label> */}
                <input
                    className={classes.InputElement}
                    type="password"
                    value={password}
                    placeholder={"Password"}
                    id="password"
                    onChange={(event) => inputChangedHandler(event, "password")}
                    required
                />
                <div className={classes.errorMsg}>{errmsg.password}</div>
            </div>
            <div className={classes.Input}>
                {/* <label className={classes.Label}>{"Confirm Password"}</label> */}
                <input
                    className={classes.InputElement}
                    type="password"
                    value={confirmPassword}
                    placeholder={"Confirm Password"}
                    id="confirmPassword"
                    onChange={(event) => inputChangedHandler(event, "confirmPassword")}
                    required
                />
                <div className={classes.errorMsg}>{errmsg.confirmPassword}</div>
            </div>
            <Button CustomBtn={classes.submitBtn}>Signup</Button>
        </form></div >)
}

export default Register;
