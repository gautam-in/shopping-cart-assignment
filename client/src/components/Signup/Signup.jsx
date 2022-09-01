import { useState } from 'react';
import styles from './Signup.module.scss';

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Signup = () => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { firstName, lastName, email, password, confirmPassword } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles['signup-container']}>
      <div>
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div>
        <form method="post" action="/">
          <div className="group">
            <label className="form-input-label">First Name</label>
            <input
              type="text"
              className="form-input"
              required
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Last Name</label>
            <input
              type="text"
              className="form-input"
              required
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Email</label>
            <input
              type="email"
              className="form-input"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label className="form-input-label">Password</label>
            <input
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
            <label className="form-input-label">Confirm Password</label>
            <input
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
