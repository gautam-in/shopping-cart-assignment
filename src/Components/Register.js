import { useState } from 'react';
import '../Style/Login.scss'
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log({ email, password })

    const onHandlePasswordChange = (e) => {
        const psw = e.target.value || "";
        setPassword(psw);
    }
    return (
        <div>
            <div className="LoginCon">
                <div className="LeftCon">
                    <h2>Signup</h2>
                    <p>Get access to your Orders. Wishlist and Recommendations</p>
                </div>
                <div className="RightCon">
                    <form>
                        <label className="emailLabel" style={{ visibility: email === "" ? "hidden" : "visible" }}>Email</label>
                        <input
                            type={"email"}
                            className="emailInput"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <label className="PasswordLabel" style={{ visibility: password === "" ? "hidden" : "visible" }}>Password</label>
                        <input
                            type={"password"}
                            className="passwordInput"
                            name='password'
                            value={password}
                            onChange={(e) => onHandlePasswordChange(e)}
                            placeholder="Password"
                        />
                        <button className='submitBtn'>Login</button>
                    </form>
                </div>
            </div>
            <div className='disclaimerTxt'>
                <p>Copyright @ 2011-2018 Sabkka Bazzar Grocery Supplies Pvt Ltd</p>
            </div>
        </div>
    )
}

export default Login;