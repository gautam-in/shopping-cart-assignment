import { Form } from "./Form";
import styles from "../Register/form.module.scss";

export const Login = () => {
  return (
    <div className={styles.reg_container}>
      <div>
        <h1>Login</h1>
        <p>Get access to your Orders, Whishlist and Recommendations</p>
      </div>
      <Form />
    </div>
  );
};
