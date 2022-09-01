import { useState } from "react";
import { FormInfo } from "../../components/Form-Info/FormInfo";
import { SignUpForm } from "../../components/Form/SignUpForm";
import styles from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import formHOC from "../../hocs/formHoc";
import PropTypes from "prop-types";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
};
const Register = ({ formFields, handleChange }) => {
  const { email, password, firstName, lastName, confirmPassword } = formFields;
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match!");
      return;
    }
    navigate("/", { replace: true, state: formFields });
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
Register.propTypes = {
  formFields: PropTypes.object,
  handleChange: PropTypes.func,
};

export default formHOC(Register, defaultFormFields);
