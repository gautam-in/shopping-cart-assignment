import Form from './Form';
import './Signup.scss';

const Signup = () => (
  <div className="page-wrap">
    <div className="container">
      <div className="signup-main">
        <div className="signup-text-wrap">
          <div className="signup-text-main">
            <h2>Signup</h2>
            <p>We do not share personal details with anyone.</p>
          </div>
        </div>
        <div className="signup-form-wrap">
          <div className="signup-form-main">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
