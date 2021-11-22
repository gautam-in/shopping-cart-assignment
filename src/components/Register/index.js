import { useState } from "react";
import { useHistory } from "react-router";

import "./index.css";

function Register() {
  const history = useHistory();
  const validPwRegEx = /^[a-zA-Z0-9]{6,}$/;

  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPW, setConfirmPW] = useState("");

  const handleRegister = async (event) => {
    if (validPwRegEx.test(pw)) {
      if (pw === confirmPW) {
        if(fName && fName.length > 0 && lName && lName.length > 0 && email && email.length > 0) {
          await history.push("/home");
          await alert("User Registration Successful!!");
        }
      } else {
        alert("Confirm password needs to be same as password value");
      }
    } else {
      alert("Password must be 6 digit alpha numeric and without spaces");
    }
  };

  return (
    <div className="wrapper">
      <main className="main-form">
        <section className="form-text">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone.</p>
        </section>
        <section className="form-data">
          <form className="login-form" onSubmit={handleRegister}>
            <fieldset>
              <label htmlFor="fname">
                <span> First Name</span>
                <input
                  name="fname"
                  value={fName}
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                  required={true}
                  aria-required={true}
                  aria-label={"First Name"}
                />
              </label>
              <label htmlFor="lname">
                <span> Last Name</span>
                <input
                  name="lname"
                  type="text"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  required={true}
                  aria-required={true}
                  aria-label={"Last Name"}
                />
              </label>
              <label htmlFor="email">
                <span> Email</span>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  aria-required={true}
                  aria-label="Email"
                />
              </label>
              <label htmlFor="password">
                <span>Password</span>
                <input
                  name="password"
                  type="password"
                  onChange={(e) => setPw(e.target.value)}
                  value={pw}
                  minLength={6}
                  required={true}
                  aria-required={true}
                  aria-label="Password"
                />
              </label>
              <label htmlFor="cpassword">
                <span>Confirm Password</span>
                <input
                  name="cpassword"
                  type="text"
                  onChange={(e) => setConfirmPW(e.target.value)}
                  value={confirmPW}
                  required={true}
                  aria-required={true}
                  aria-label="Confirm Password"
                />
              </label>
              <button
                type="button"
                onClick={handleRegister}
                disabled={
                  fName.length === 0 ||
                  lName.length === 0 ||
                  email.length === 0 ||
                  pw.length === 0 ||
                  confirmPW.length === 0
                }
                style={
                  fName.length === 0 ||
                  lName.length === 0 ||
                  email.length === 0 ||
                  pw.length === 0 ||
                  confirmPW.length === 0
                    ? null
                    : { cursor: "pointer" }
                }
              >
                Register
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Register;
