import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(formInitialValues);
  const { firstName, lastName, email, password, confirmPassword } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password mismatch!');
      return;
    }
    setFormValues(formInitialValues);
    alert('Sign Up Successfull');
    navigate('/');
  };

  return (
    <div className="flex-container">
      <div className="center-box">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="center-box">
        <form method="post" action="/" onSubmit={handleSubmit}>
          <div className="group">
            <label className="form-input-label" htmlFor="firstName">
              First Name{' '}
              <span aria-hidden="true" className="required-star">
                *
              </span>
            </label>
            <input
              id="firstName"
              type="text"
              className="form-input"
              required
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label" htmlFor="lastName">
              Last Name{' '}
              <span aria-hidden="true" className="required-star">
                *
              </span>
            </label>
            <input
              id="lastName"
              type="text"
              className="form-input"
              required
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label" htmlFor="email">
              Email{' '}
              <span aria-hidden="true" className="required-star">
                *
              </span>
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label" htmlFor="password">
              Password{' '}
              <span aria-hidden="true" className="required-star">
                *
              </span>
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              required
              name="password"
              value={password}
              onChange={handleChange}
              minLength="6"
              pattern="^[a-zA-Z0-9]*$"
            />
          </div>
          <div className="group">
            <label className="form-input-label" htmlFor="password">
              Confirm Password{' '}
              <span aria-hidden="true" className="required-star">
                *
              </span>
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              required
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              minLength="6"
              pattern="^[a-zA-Z0-9]*$"
            />
          </div>
          <button className="form-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
