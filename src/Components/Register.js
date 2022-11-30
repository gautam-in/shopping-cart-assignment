import { useState } from 'react';
import '../Style/Login.scss'
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const onHandlePasswordChange = (e, type) => {
        const psw = e.target.value || "";
        type === "confirm" ? setCPassword(psw) : setPassword(psw);
    }
    return (
        <div>
            <div className="LoginCon">
                <div className="LeftCon">
                    <h2>Signup</h2>
                    <p>We do not share your personal details with anyone.</p>
                </div>
                <div className="RightCon">
                    <form>
                        <label className="FnameLabel" style={{ visibility: fname === "" ? "hidden" : "visible" }}>First Name</label>
                        <input
                            type={"text"}
                            className="FnameInput"
                            name='fname'
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="First Name"
                        />
                        <label className="LnameLabel" style={{ visibility: lname === "" ? "hidden" : "visible" }}>Last Name</label>
                        <input
                            type={"text"}
                            className="LnameInput"
                            name='lname'
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last Name"
                        />
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
                            onChange={(e) => onHandlePasswordChange(e, "new")}
                            placeholder="Password"
                        />
                        <label className="PasswordLabel" style={{ visibility: cpassword === "" ? "hidden" : "visible" }}>Confirm Password</label>
                        <input
                            type={"password"}
                            className="passwordInput"
                            name='cpassword'
                            value={cpassword}
                            onChange={(e) => onHandlePasswordChange(e, "confirm")}
                            placeholder="Confirm Password"
                        />
                        <button className='submitBtn'>SignUp</button>
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