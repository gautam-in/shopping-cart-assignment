import { Form } from "./Form";
import styles from "./form.module.scss"

export const Register = () => {
  return (
    <div className={styles.reg_container}>
      <div>
        <h1>Signup</h1>
        <p>We do not share your personal information with anyone</p>
      </div>
      <Form />
    </div>
  );
};
