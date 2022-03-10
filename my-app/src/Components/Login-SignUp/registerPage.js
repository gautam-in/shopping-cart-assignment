import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import "./registerPage.css"

const RegisterPage = () => {

    const [details, setDetails] = useState({ emailId: "", password: "", firstName: "", lastName: "", confrimPassword: "" })
    const [errors, seterrorDetails] = useState({ errorEmailId: "", errorPassword: "", errorFirstName: "", errorLastName: "", errorConfrimPassword: "" })
    const navigate = useNavigate()

    const handleChange = (event) => {


        switch (event.target.name) {
            case "firstName":
                setDetails({ ...details, firstName: event.target.value })
                seterrorDetails({ ...errors, errorFirstName: "" })
                break;
            case "lastName":
                setDetails({ ...details, lastName: event.target.value })
                seterrorDetails({ ...errors, errorLastName: "" })
                break
            case "emailId":
                if (event.target.value.toLowerCase().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi)) {
                    setDetails({ ...details, emailId: event.target.value })
                    seterrorDetails({ ...errors, errorEmailId: "" })

                }
                else {
                    setDetails({ ...details, emailId: "" })
                    seterrorDetails({ ...errors, errorEmailId: "Please enter valid email" })
                }
                break;
            case "password":
                if (event.target.value.match(/^.*(?=.{6,18})(?=.*\d)(?=.*[A-Za-z]).*$/)) {
                    setDetails({ ...details, password: event.target.value })
                    seterrorDetails({ ...errors, errorPassword: "" })
                }
                else {
                    setDetails({ ...details, password: "" })
                    seterrorDetails({ ...errors, errorPassword: "Please enter password with minimum length 6 characters must have a number and alphabet" })
                }
                break
            case "confrimPassword":
                if (event.target.value === details.password) {
                    setDetails({ ...details, confrimPassword: event.target.value })
                    seterrorDetails({ ...errors, errorConfrimPassword: "" })
                }
                else {
                    setDetails({ ...details, confrimPassword: "" })
                    seterrorDetails({ ...errors, errorConfrimPassword: "Please enter correct password" })
                }
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (details.firstName === "" || details.lastName === "" || details.emailId === "" || details.password === "" || details.confrimPassword === "") {
            if (details.firstName === "") {
                seterrorDetails({ ...errors, errorFirstName: "Please enter firstname" })
            }
            else if (details.lastName === "") {
                seterrorDetails({ ...errors, errorLastName: "Please enter lastname" })
            }
            else if (details.emailId === "") {
                seterrorDetails({ ...errors, errorEmailId: "Please enter emailId" })
            }
            else if (details.password === "") {
                seterrorDetails({ ...errors, errorPassword: "Please enter password" })
            }
            else {
                seterrorDetails({ ...errors, errorConfrimPassword: "Please enter confrim password" })
            }
        }
        else if (details.password !== details.confrimPassword) {
            seterrorDetails({ ...errors, errorConfrimPassword: "Please enter correct password" })
        }
        else {
            alert("User registered successfully")
            navigate("/Login")
        }
    }


    return (
        <article>
            <div className="register-form-container">
                <section className="login-text">
                    <h3>SignUp</h3>
                    <strong className="register-tagline">We do not share your personal details with anyone</strong>
                </section>
                <section className="register-forms">
                    <form noValidate onSubmit={(e) => { handleSubmit(e) }}>

                        <div className="firstnam-field">
                            <input aria-required="true" type={"type"} name={"firstName"} id="fName" required onChange={(e) => { handleChange(e) }} />
                            <label for="fName">First Name</label>
                            <span tabIndex={"0"} aria-label={errors.errorFirstName ? errors.errorFirstName : null}>{errors.errorFirstName ? <p style={{ color: "red" }}>{errors.errorFirstName}</p> : null}</span>
                        </div>

                        <div className="lastname-field">
                            <input aria-required="true" type={"type"} name={"lastName"} id="lName" required onChange={(e) => { handleChange(e) }} />
                            <label for="lName">Last Name</label>
                            <span tabIndex={"0"} aria-label={errors.errorLastName ? errors.errorLastName : null}>{errors.errorLastName ? <p style={{ color: "red" }}>{errors.errorLastName}</p> : null}</span>
                        </div>

                        <div className="email-field">
                            <input aria-required="true" type={"email"} name={"emailId"} id="email" required onChange={(e) => { handleChange(e) }} />
                            <label for="email">Email</label>
                            <span tabIndex={"0"} aria-label={errors.errorEmailId ? errors.errorEmailId : null}>{errors.errorEmailId ? <p style={{ color: "red" }}>{errors.errorEmailId}</p> : null}</span>
                        </div>

                        <div className="pass-field">
                            <input aria-required="true" type={"password"} name={"password"} id="password" required onChange={(e) => { handleChange(e) }} />
                            <label for="password">Password</label>
                            <span tabIndex={"0"} aria-label={errors.errorPassword ? errors.errorPassword : null}>{errors.errorPassword ? <p style={{ color: "red" }}>{errors.errorPassword}</p> : null}</span>
                        </div>

                        <div className="cpass-field">
                            <input aria-required="true" type={"password"} name={"confrimPassword"} required id="cPassword" onChange={(e) => { handleChange(e) }} />
                            <label for="cPassword">Confrim Password</label>
                            <span tabIndex={"0"} aria-label={errors.errorConfrimPassword ? errors.errorConfrimPassword : null}>{errors.errorConfrimPassword ? <p style={{ color: "red" }}>{errors.errorConfrimPassword}</p> : null}</span>
                        </div>
                        <footer class="footer-btn">
                            <button className="register-button" type="submit">Register</button>
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

export default RegisterPage