import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { fName, lName, email, password, confirmPassword } = formData;

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
    if (!fName) {
      errors.fName = 'First name is required';
    }

    if (!lName) {
      errors.lName = 'Last name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      errors.password = `Password atleast 6 characters, must have single letter, single
      digit without spaces`;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Password did not match';
    }

    setErrors(errors);
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      navigate('/login');
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='text'>
          <h2 style={{ fontWeight: '600' }}>Signup</h2>
          <div>We do not share your personal details with anyone</div>
        </div>
        <Form
          noValidate
          // validated={validated}
          className='form'
          onSubmit={handleSubmit}
        >
          <FloatingLabel controlId='fName' label='First Name' className='mb-3'>
            <Form.Control
              type='text'
              name='fName'
              value={fName}
              onChange={handleInputChange}
              isInvalid={!!errors.fName}
              required
              placeholder='First Name'
              aria-describedby='first-name-error'
            />
            <Form.Control.Feedback id='first-name-error' type='invalid'>
              {errors.fName}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId='lName' label='Last Name' className='mb-3'>
            <Form.Control
              type='text'
              name='lName'
              value={lName}
              onChange={handleInputChange}
              isInvalid={!!errors.lName}
              required
              placeholder='Last Name'
            />
            <Form.Control.Feedback type='invalid'>
              {errors.lName}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId='email' label='Email' className='mb-3'>
            <Form.Control
              type='email'
              name='email'
              value={email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
              required
              placeholder='Email'
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className='mb-3' controlId='password' label='Password'>
            <Form.Control
              type='password'
              name='password'
              value={password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
              required
              placeholder='Password'
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId='confirmPassword' label='Confirm Password'>
            <Form.Control
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleInputChange}
              placeholder='confirm password'
              isInvalid={!!errors.confirmPassword}
              required
            />
            <Form.Control.Feedback type='invalid'>
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Button type='submit' size='lg' className='mt-2 mb-2'>
            Signup
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
