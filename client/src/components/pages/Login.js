import LoginForm from "../UI/organisms/Form/LoginForm";
import LoginText from "../UI/atoms/FormText/LoginText";
import "../UI/organisms/Form/Form.scss";

const Login = () => {
  return (
    <div className="login-wrap">
      <LoginText />
      <LoginForm />
    </div>
  );
};
export default Login;
