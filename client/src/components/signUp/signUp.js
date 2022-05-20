import "./signUp.scss";

// Sign up component.
const SignUp = () => {
    return (<>
        <main className="signUp-container">
            <section className="signUp-inner-container">
                <h4 className="signUp-heading">Signup</h4>
                <p>We do not share your personal details with anyone.</p>
            </section>
            <section className="signUp-inner-container">
                <form>
                    <label for="firstname" className="signUp-label">First Name <br />
                        <input className="form-input" id="firstname" required type="text" /></label>
                    <br />
                    <label for="lastName" className="signUp-label">Last Name <br />
                        <input className="form-input" id="lastName" required type="text" /></label>
                    <br />
                    <label for="email" className="signUp-label">Email <br />
                        <input className="form-input" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" /></label>
                    <br />
                    <label for="password" className="signUp-label">Password <br />
                        <input className="form-input" id="password" required type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" /></label>
                    <br />
                    <label for="confirmPassword" className="signUp-label">Confirm Password<br />
                        <input className="form-input" id="confirmPassword" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" /></label>
                    <br />
                    <button type="submit" className="signUp-button">Signup</button>
                </form>
            </section>
        </main>
    </>)
}

export default SignUp;