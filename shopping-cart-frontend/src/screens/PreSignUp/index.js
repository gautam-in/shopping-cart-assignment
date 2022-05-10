import "./PreSignUp.scss";
import Form from "../../components/Form";
import { Constants } from "../../utils/constant";
import { LoginFormFields } from "./LoginFormFields";
import { SignupFormFields } from "./SignupFormFields";

function PreSignIn({ isLogin }) {
  return (
    <div className="mainContainer">
      <div>
        <h1>{isLogin ? "Login" : "Signup"}</h1>
        <p>{isLogin ? Constants.loginSubTitle : Constants.signupSubTitle}</p>
      </div>
      <div>
        <Form formFields={isLogin ? LoginFormFields : SignupFormFields} />
      </div>
    </div>
  );
}

export default PreSignIn;
