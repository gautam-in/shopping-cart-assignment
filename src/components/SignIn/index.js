import { useState } from "react";
import { useHistory } from "react-router";

import "./index.css";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    if(email && email.length > 0 && password && password.length > 0) {
      history.push("/home");
      alert("Login Successful!!");
    }
  };

  return (
    <div className="wrapper">
      <main className="main-form">
        <section className="form-text">
          <h2>Login</h2>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </section>
        <section className="form-data">
          <form className="login-form">
            <fieldset>
              <label htmlFor="email">
                <span> Email</span>
                <input
                  name="email"
                  value={email}
                  type="email"
                  required={true}
                  aria-required={true}
                  aria-label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label htmlFor="password">
                <span>Password</span>
                <input
                  name="password"
                  value={password}
                  type="password"
                  aria-required={true}
                  required={true}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <button
                disabled={email.length === 0 || password.length === 0}
                type="button"
                tabIndex={0}
                onClick={handleLoginSubmit}
                style={
                  email.length <= 0 || password.length <= 0
                    ? null
                    : { cursor: "pointer" }
                }
              >
                Login
              </button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
