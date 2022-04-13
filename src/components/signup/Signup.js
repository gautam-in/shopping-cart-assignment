import MainWrap from "../wrapper/Wrapper";
import styles from "./Signup.module.scss";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <MainWrap>
      <div className={styles["sign-inner"]}>
        <div className={styles["sign-content"]}>
          <h1 className={styles["sign-text"]}>Signup</h1>
          <div className={styles["sign-description"]}>
            We do not share your personal details with anyone.
          </div>
        </div>
        <div className={styles["sign-form"]}>
          <SignupForm />
        </div>
      </div>
    </MainWrap>
  );
};

export default Signup;
