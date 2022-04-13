import MainWrap from "../wrapper/Wrapper";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <MainWrap>
      <div className={styles["sign-inner"]}>
        <div className={styles["sign-content"]}>
          <h1 className={styles["sign-text"]}>Login</h1>
          <div className={styles["sign-description"]}>
            Get Access to your Orders, Wishlist and Recommendations
          </div>
        </div>
        <div className={styles["sign-form"]}>
          <LoginForm />
        </div>
      </div>
    </MainWrap>
  );
};

export default Login;
