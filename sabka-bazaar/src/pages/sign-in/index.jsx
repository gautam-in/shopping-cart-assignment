import { FormInfo } from "../../components/Form-Info/FormInfo";
import { SignInForm } from "../../components/Form/SignInForm";
import formHOC from "../../hocs/formHoc";
import PropTypes from "prop-types";

import styles from "./sign-in.module.scss";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = ({ formFields, handleChange }) => {
  const navigate = useNavigate();
  const { email, password } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/", { replace: true, state: formFields });
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
SignIn.propTypes = {
  formFields: PropTypes.object,
  handleChange: PropTypes.func,
};
export default formHOC(SignIn, defaultFormFields);
