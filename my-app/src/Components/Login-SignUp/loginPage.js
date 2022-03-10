import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
// import "./loginpage.scss"
import "./loginpage.css"
const LoginPage = () => {

    const [details, setDetails] = useState({ email: "", password: "" })
    const [errorDetails, seterrorDetails] = useState({ errorEmail: "", errorPassword: "" })
    const navigate = useNavigate()

    const handleChange = (event) => {

        switch (event.target.name) {
            case "emailId":
                if (event.target.value.toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi)) {
                    setDetails({ ...details, email: event.target.value })
                    seterrorDetails({ ...errorDetails, errorEmail: "" })

                }
                else {
                    setDetails({ ...details, email: "" })
                    seterrorDetails({ ...errorDetails, errorEmail: "Please enter valid email" })
                }
                break;
            case "password":
                if (event.target.value.match(/^.*(?=.{6,18})(?=.*\d)(?=.*[A-Za-z]).*$/)) {
                    setDetails({ ...details, password: event.target.value })
                    seterrorDetails({ ...errorDetails, errorPassword: "" })
                }
                else {
                    setDetails({ ...details, password: "" })
                    seterrorDetails({ ...errorDetails, errorPassword: "Please enter password with minimum length 6 characters must have a number and alphabet" })
                }
                break

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details.email === "" && details.password === "");
        if (details.email === "" && details.password === "") {
            seterrorDetails({ ...errorDetails, errorEmail: "Please enter emailId", errorPassword: "Please enter password" })
        }
        else if (details.email === "" && details.password !== "") {
            seterrorDetails({ ...errorDetails, errorEmail: "Please enter valid email" })
        }
        else if (details.email !== "" && details.password === "") {
            seterrorDetails({ ...errorDetails, errorPassword: "Please enter password" })
        }
        else {
            alert("User logedin successfully")
            navigate("/HomePage")
        }
    }

    return (
        <article>
            <div className="form-container">
                <section className="login-text" >
                    <h3>Login</h3>
                    <strong className="login-tagline">Get access to your Orders, Wishlist and Recommendations</strong>
                </section>
                <section className="login-forms">
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="name-field">
                            <input aria-required="true" type={"email"} name={"emailId"} id="email" onChange={(e) => { handleChange(e) }} required />
                            <label for="email">Email</label>
                            <span tabIndex={"0"} aria-label={errorDetails.errorEmail ? errorDetails.errorEmail : null} aria-describedby={errorDetails.errorEmail ? errorDetails.errorEmail : null}>{errorDetails.errorEmail ? <p style={{ color: "red" }}>{errorDetails.errorEmail}</p> : null}</span>
                        </div>
                        <div className="password-field">
                            <input aria-required="true" type={"password"} name={"password"} id="password" onChange={(e) => { handleChange(e) }} required />
                            <label for="password">Password</label>
                            <span tabIndex={"0"} aria-label={errorDetails.errorPassword ? errorDetails.errorPasswordl : null} >{errorDetails.errorPassword ? <p style={{ color: "red" }}>{errorDetails.errorPassword}</p> : null}</span>

                        </div>
                        <footer class="footer-btn">
                            <button className="login-button" type="submit">Login</button>
                        </footer>
                    </form>
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </article>
    )
}

export default LoginPage