import SignUpForm from "../components/Form/SignUpForm"
export default function SignUp() {
    return (
        <div className="login-wrap">
                <div className="heading">
                    <h1>Sign Up</h1>
                    <p>We do not share your personal details with anyone</p>
                </div>
            <SignUpForm />
        </div>
    )
}