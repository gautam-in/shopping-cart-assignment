import Button from "../../components/button/button";
import FormInputWithError from "../../components/formInputWithError/formInputWithError";
import "./login.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./login.formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { paths } from "../../routing/constants";
import { loginUser } from "../../redux/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data) => {
      const user = await dispatch(loginUser(data));
      user && handleReset();
      user && history.push(paths.home);
    },
  });

  const { errors, handleChange, values, handleSubmit, handleReset } = formik;

  return (
    <div className="login-container">
      <div className="left-section">
        <h1 className="title">Login</h1>
        <p className="subtitle">
          Get access to your Orders, Wishlist and Recommendations.
        </p>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
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
          <Button className="login" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
