import SignUpForm from '../../components/organisms/signUpForm/signUpForm';

function SignUpComponent() {
  return (
    <div className="signUpComponent d-flex justify-content-around align-items-lg-center flex-wrap mt-md-5">
      <div className="signUpComponent__content mb-5">
        <h2 className="signUpComponent__title">Sign Up</h2>
        <p className="signUpComponent__description">We don't share your personal detail with anyone</p>
      </div>
      <SignUpForm />
    </div>
  );
}

export default SignUpComponent;
