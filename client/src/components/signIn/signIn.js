import "./signIn.scss";

// Sign in component.
const SignIn = () => {
    return (<>
        <main className="signIn-container">
            <section className="signIn-inner-container">
                <h4 className="login-heading">Login</h4>
                <p>Get access to your Orders,Wishlist and Recommendation.</p>
            </section>
            <section className="signIn-inner-container">
                <form>
                    <label for="email" className="signIn-label">Email <br />
                        <input className="signIn-form-input" id="email" required type={"email"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email id" /></label>
                    <br />
                    <label for="password" className="signIn-label">Password
                        <br />
                        <input className="signIn-form-input" id="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" /></label>
                    <br />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </section>
        </main>
    </>)
}

export default SignIn;