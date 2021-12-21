import SignUpForm from "../../components/organisms/signUpForm/signUpForm";
import "./signUpComponent.scss";

function SignUpComponent() {
  return (
    <div className="signUpComponent d-flex justify-content-around align-items-lg-center flex-wrap">
      <div className="signUpComponent__content">
        <h2 className="signUpComponent__title">Sign Up</h2>
        <p className="signUpComponent__description">
          We don't share your personal detail with anyone
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}

export default SignUpComponent;
