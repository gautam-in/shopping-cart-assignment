import LoginForm from "../components/Form/LoginForm"

export default function Login() {
    return (
        <div className="login-wrap">
                <div className="heading">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Whislist and Recommendations</p>
                </div>
            <LoginForm />
        </div>
    )
}