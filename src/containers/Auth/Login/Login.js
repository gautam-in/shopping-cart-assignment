import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../../shared/utility";
import classes from "../Authentication.css";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const inputChangedHandler = (e, id) => {
        switch (id) {
            case "email":
                setEmail(e.target.value);
                const errEmail = {
                    email: {
                        required: checkValidity({ required: true, }, e.target.value),
                        isEmail: checkValidity({ isEmail: true }, e.target.value),
                    }
                }
                setError(updateObject(error, errEmail));
                break;
            case "password":
                setPassword(e.target.value);
                const errPassword = {
                    password: {
                        required: checkValidity({ required: true, }, e.target.value),
                        isPassword: checkValidity({ isPassword: true }, e.target.value),
                    }
                }
                setError(updateObject(error, errPassword));
                break;
            default:
        }
    };
    let errmsg = {};
    const valiateForm = () => {
        const obj = {};
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
        if (error.email && error.email.required && error.email.isEmail
            && error.password && error.password.required && error.password.isPassword) {
            obj.isValid = true;
        }
        setError(updateObject(error, obj));
        return obj.isValid;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        valiateForm() && props.history.push("/home");
    };

    let formInfo = (
        <div className={classes.AuthInfoWapper}>
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
        </div>
    );

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

    return (
        <div className={classes.Auth}>
            {formInfo}
            <form className={classes.FormWapper} onSubmit={submitHandler} novalidate>
                <div className={classes.Input}>
                    {/* <label className={classes.Label}>{"Email"}</label> */}
                    <input
                        className={classes.InputElement}
                        type="email"
                        value={email}
                        placeholder={"Email"}
                        id="email"
                        onChange={(event) => inputChangedHandler(event, "email")}
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
                    />
                    <div className={classes.errorMsg}>{errmsg.password}</div>
                </div>
                <Button CustomBtn={classes.submitBtn}>Login</Button>
            </form>
        </div>
    );
};

export default Login;
