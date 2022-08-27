import { useState } from "react";
import { FormInfo } from "../../components/Form-Info/FormInfo";
import { SignUpForm } from "../../components/Form/SignUpForm";
import styles from "./register.module.scss";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
};
const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, firstName, lastName, confirmPassword } = formFields;
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match!");
      return;
    }
    navigate("/", { state: formFields });
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
          firstName={firstName}
          lastName={lastName}
          confirmPassword={confirmPassword}
          passwordMatchError={passwordMatchError}
        />
      </section>
    </div>
  );
};

export default Register;
