import SignUpText from "../UI/atoms/FormText/SignUpText";
import SignUpForm from "../UI/organisms/Form/SignUpForm";
import "../UI/organisms/Form/Form.scss";

const SignUp = () => {
  return (
    <div className="login-wrap">
      <SignUpText />
      <SignUpForm />
    </div>
  );
};
export default SignUp;
