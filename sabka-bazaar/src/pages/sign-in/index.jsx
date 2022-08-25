import { useState } from "react";
import { FormInfo } from "../../components/Form-Info/FormInfo";
import { SignInForm } from "../../components/Form/SignInForm";

import styles from "./sign-in.module.scss";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <section>
        <FormInfo
          title="Login"
          description="Get access to your Orders, Wishlist and Recommendations"
        />
      </section>

      <section>
        <SignInForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
        />
      </section>
    </div>
  );
};

export default SignIn;
