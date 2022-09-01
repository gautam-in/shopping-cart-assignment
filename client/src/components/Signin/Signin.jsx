import { useState } from 'react';

const formInitialValues = {
  email: '',
  password: ''
};

const Signin = () => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValues(formInitialValues);
    alert('SignUp Successfull');
  };

  return (
    <div className="flex-container">
      <div className="center-box">
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="center-box">
        <form method="post" action="/" onSubmit={handleSubmit}>
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
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
