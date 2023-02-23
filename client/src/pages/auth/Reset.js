import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import resetImg from "../../assets/images/forgot.png";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { auth } from "../../firebase/config";
import styles from "./auth.module.scss";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="Reset Password" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>

            <form onSubmit={resetPassword}>
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

              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
