import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/images/login.png";
import { Card, Loader } from "../../components";
import { auth } from "../../firebase/config";
import { selectPreviousURL } from "../../redux/slice/cartSlice";
import styles from "./auth.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        toast.success("Login Successful...");
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  //Login with Google

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      {/* <form>
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className={styles.pass}>Forgot Password?</div>
        <button className="--btn --btn-primary --btn-block">Login</button>
        <div class={styles.signup_link}>
          Not a member? <a href="#">Signup</a>
        </div>
      </form> */}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={loginUser}>
              <div className={styles.txt_field}>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span></span>
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles.txt_field}>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span></span>
                <label htmlFor="password">Password</label>
              </div>

              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register"> Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
