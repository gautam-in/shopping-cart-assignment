import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setErrors({ errors: {} });
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = `Password atleast 6 characters, must have single letter, single
      digit without spaces`;
    }
    setErrors(errors);
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      navigate('/');
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='text'>
          <h2 style={{ fontWeight: '600' }}>Login</h2>
          <div>Get access to your Orders, Wishlist and Recommendations</div>
        </div>
        <Form
          noValidate
          // validated={validated}
          className='form'
          onSubmit={handleSubmit}
        >
          <Form.Group controlId='email'>
            <FloatingLabel controlId='floatingInput' label='Email'>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter email'
                isInvalid={!!errors.email}
                required
                className='mb-3'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId='password'>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Password'
                isInvalid={!!errors.password}
                required
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button type='submit' size='lg' className='mt-2 mb-2'>
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
