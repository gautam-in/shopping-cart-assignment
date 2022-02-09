import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validConPassword, setValidConPassword] = useState(true);
  const [initialTime, setIntialTime] = useState(false);

  const navigate = useNavigate();
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(
    //   email,
    //   password,
    //   conPassword,
    //   /^[A-Za-z0-9]+$/.test(password),
    //   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    // );
    if (firstName.length === 0) {
      setValidFirstName(false);
    } else setValidFirstName(true);
    if (lastName.length === 0) {
      setValidLastName(false);
    } else setValidLastName(true);
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
    if (conPassword.length === 0 && conPassword !== password) {
      setValidConPassword(false);
    } else setValidConPassword(true);
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) &&
      /^[A-Za-z0-9]+$/.test(password) &&
      password.length > 5 &&
      conPassword === password
    ) {
      setIntialTime(true);
    }
    // if (
    //   validConPassword &&
    //   validPassword &&
    //   validEmail &&
    //   validFirstName &&
    //   validLastName
    // )
    //   navigate("/");
  };
  useEffect(() => {
    if (
      validConPassword &&
      validPassword &&
      validEmail &&
      validFirstName &&
      validLastName &&
      initialTime
    )
      navigate("/");
  }, [
    validLastName,
    validFirstName,
    validPassword,
    validConPassword,
    validEmail,
    initialTime,
  ]);
  return (
    <section className="signin">
      <main className="form-container">
        <div className="form-container-first">
          <div className="form-title mb-3">Signup</div>
          <div className="form-title-sub">
            We do not share your personal details with anyone
          </div>
        </div>
        <div className="form-container-second">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="fname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {!validFirstName && (
              <span className="px-3 error">Enter First Name</span>
            )}
            <br />
            <input
              type="text"
              className="lname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {!validLastName && (
              <span className="px-3 error">Enter Last Name</span>
            )}
            <br />
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
            <input
              type="password"
              className="pwd"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
            {!validConPassword && (
              <span className="px-3 error">
                Enter Confirm Password: It should match the password
              </span>
            )}
            <br />
            <br />
            <button type="submit" className="form-button">
              SignUp
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Register;
