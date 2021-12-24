import SignInForm from '../../components/organisms/signInForm/signInForm';
import './signInContainer';

function SignInComponent() {
  return (
    <div style={{ minHeight: '76vh' }} className="signInComponent d-flex justify-content-around flex-wrap mt-md-5">
      <div className="signInComponent__content mb-5">
        <h2 className="signInComponent__title">Login</h2>
        <p className="signInComponent__description">Get access to your Order, Wishlist and Recommendations</p>
      </div>
      <SignInForm />
    </div>
  );
}

export default SignInComponent;
