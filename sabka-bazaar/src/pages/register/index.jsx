import { useState } from "react";
import { FormInfo } from "../../components/Form-Info/FormInfo";
import { SignUpForm } from "../../components/Form/SignUpForm";
import styles from "./register.module.scss";
const defaultFormFields = {
  email: "",
  password: "",
};
const Register = () => {
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
          title="Signup"
          description="We do not share your personal details with anyone"
        />
      </section>

      <section>
        <SignUpForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
        />
      </section>
    </div>
  );
};

export default Register;
