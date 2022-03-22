import Button from "../../components/button/button";
import FormInputWithError from "../../components/formInputWithError/formInputWithError";
import "./register.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialValues, validationSchema } from "./register.formik";
import { registerUser } from "../../redux/auth/auth.actions";
import { useHistory } from "react-router-dom";
import { paths } from "../../routing/constants";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data) => {
      const user = await dispatch(registerUser(data));
      user && handleReset();
      user && history.push(paths.home);
    },
  });

  const { errors, handleChange, values, handleSubmit, handleReset } = formik;

  return (
    <div className="register-container">
      <div className="left-section">
        <h1 className="title">Sign Up</h1>
        <p className="subtitle">
          We do not share your personal details with anyone.
        </p>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <FormInputWithError
            label="First Name"
            name="firstname"
            errorMessage={errors.firstname}
            onChange={handleChange}
            value={values.firstname}
          />
          <FormInputWithError
            label="Last Name"
            name="lastname"
            errorMessage={errors.lastname}
            onChange={handleChange}
            value={values.lastname}
          />
          <FormInputWithError
            label="Email"
            name="email"
            errorMessage={errors.email}
            onChange={handleChange}
            value={values.email}
          />
          <FormInputWithError
            label="Password"
            name="password"
            type="password"
            errorMessage={errors.password}
            onChange={handleChange}
            value={values.password}
          />
          <FormInputWithError
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            errorMessage={errors.confirmPassword}
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <Button className="login" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
