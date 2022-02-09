import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [initialTime, setIntialTime] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(validEmail, validPassword, email, password, initialTime);
    if (
      email.length === 0 ||
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    ) {
      setValidEmail(false);
    } else setValidEmail(true);
    if (
      password.length === 0 ||
      password.length < 6 ||
      !/^[A-Za-z0-9]+$/.test(password)
    ) {
      setValidPassword(false);
    } else setValidPassword(true);
    if (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) &&
      /^[A-Za-z0-9]+$/.test(password) &&
      password.length > 5
    ) {
      setIntialTime(true);
    }
  };
  useEffect(() => {
    if (validPassword && validEmail && initialTime) navigate("/");
  }, [validPassword, validEmail, initialTime]);
  return (
    <section className="signin">
      <main className="form-container">
        {/* <div className="form-container-first-signin"> */}
        <div className="form-container-first">
          <div className="form-title mb-3">Login</div>
          <div className="form-title-sub">
            Get access to your Orders, Wishlist and Recommendations
          </div>
        </div>
        <div className="form-container-second">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!validEmail && <span className="px-3 error">Enter Email</span>}
            <br />
            <input
              type="password"
              className="pwd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!validPassword && (
              <span className="px-3 error">
                Enter Password: It should be minimum of 6 characters and should
                contain a number and alphabet and no spaces
              </span>
            )}
            <br />
            <br />
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default SignIn;
