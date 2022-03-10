import React, {useState} from "react";
import  {useNavigate} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import "../signup/signup.scss";

const Signup = (props) => {
  const navigate = useNavigate();

  let [signupForm, setSignupForm] = useState({
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: '',
    emailErrorText: false,
    password: '',
    passwordErrorText: false,
    confirmPassword: '',
    confirmPasswordError: false,
  });

  function isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  function checkEmailError(email) {
    if(!email.length) {
      return "Email is a required field.";
    } else if(!isValidEmail(email)) {
      return "Email invalid.";
    }
    return "";
  }

  function checkPasswordError(password) {
    if(!password.length) {
      return "Password is a required field."
    } else if(password.length < 6) {
      return "Password minimum length should be 6 characters."
    }
    const containsSpace = /\s/.test(password);
    if(containsSpace) {
      return "Password should not contain space.";
    }
    return "";
  }
  
  let handleChange = (e) => {
    const { name, value } = e.target;
    const newSignupForm = {
      ...signupForm,
      [name]: value,
    };
   
    switch (name) {
      case 'firstName':
        newSignupForm.firstNameError = !value.length ? true : false;
        setSignupForm(newSignupForm);
        return;
      case 'lastName':
        newSignupForm.lastNameError = !value.length ? true : false;
        setSignupForm(newSignupForm);
        return;
      case 'email':
        newSignupForm.emailErrorText = checkEmailError(value);
        setSignupForm(newSignupForm);
        return;
      case 'password':
        newSignupForm.passwordErrorText = checkPasswordError(value);
        newSignupForm.confirmPasswordError2 = newSignupForm.confirmPassword && newSignupForm.password !== newSignupForm.confirmPassword;
        setSignupForm(newSignupForm);
        return;
      case 'confirmPassword':
        newSignupForm.confirmPasswordError = !value.length ? true : false;
        newSignupForm.confirmPasswordError2 = newSignupForm.password !== newSignupForm.confirmPassword;
        setSignupForm(newSignupForm);
        return;
    }
  }

  function handleSubmit(e) {
    const { firstName, lastName, email, password, confirmPassword } = signupForm;
    const newSignupForm = {
      ...signupForm,
      firstNameError: firstName ? false : true,
      lastNameError: lastName ? false : true,
      emailErrorText: checkEmailError(email),
      passwordErrorText: checkPasswordError(password),
      confirmPasswordError: confirmPassword ? false : true,
      confirmPasswordError2: password !== confirmPassword,
    };
    const { firstNameError, lastNameError, emailErrorText, passwordErrorText, confirmPasswordError, confirmPasswordError2 } = newSignupForm;
    setSignupForm({...newSignupForm});
    if (!firstNameError && !lastNameError && !emailErrorText && !passwordErrorText && !confirmPasswordError && !confirmPasswordError2) {
      navigate("/home");
    }
    e.preventDefault(); 
  }

  return (      
      <section className='signup-wrapper'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='loginText-wrapper'>
                <h3 className="heading-text">Signup</h3>
                <p>We do not share your personal details with anyone.</p>
              </div>
            </Col>
            <Col md={6}>
            <div className="card border-0 px-3 mx-auto mt-5">
              <div className="card-body">
                <form action="/" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                  <div className="form-group">
                    <input aria-label="firstName" aria-required="true" id="firstNameInput" name="firstName" type="text" placeholder="First name" className="form-control form-field" value={signupForm.firstName} onChange={handleChange} />
                    { signupForm.firstNameError
                      ? <div data-test="firstNameError" className="alert alert-danger mt-2">First name is a required field.</div>
                      : ''
                    }
                    <label htmlFor="firstNameInput" className="mb-0 form-label">First Name<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-group">
                    <input aria-label="Last Name"aria-required="true" id="lastNameInput" name="lastName" type="text" placeholder="Last name" className="form-control form-field" value={signupForm.lastName} onChange={handleChange} />
                    { signupForm.lastNameError
                      ? <div data-test="lastNameError" className="alert alert-danger mt-2">Last name is a required field.</div>
                      : ''
                    }
                    <label htmlFor="lastNameInput" className="mb-0 form-label">Last Name<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-group">
                    <input aria-label="email" aria-required="true" id="emailInput" name="email" type="email" placeholder="Email" className="form-control form-field" value={signupForm.email} onChange={handleChange} />
                    { signupForm.emailErrorText &&
                      <div data-test="emailErrorText" className="alert alert-danger mt-2">{signupForm.emailErrorText}</div>
                    }
                    <label htmlFor="emailInput" className="mb-0 form-label">Email<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-group">
                    <input aria-label="password" aria-required="true" id="passwordInput" name="password" type="password" placeholder="Password" className="form-control form-field" value={signupForm.password} onChange={handleChange} />
                    { signupForm.passwordErrorText && <div data-test="passwordErrorText" className="alert alert-danger mt-2">{signupForm.passwordErrorText}</div>
                    }
                    <label htmlFor="passwordInput" className="mb-0 form-label">Password<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-group">
                    <input aria-label="Confirm password" aria-required="true" id="confirmpasswordInput" name="confirmPassword" type="confirmPassword" placeholder="Confirm pasword" className="form-control form-field" value={signupForm.confirmPassword} onChange={handleChange} />
                    { signupForm.confirmPasswordError
                      ? <div data-test="confirmPasswordError" className="alert alert-danger mt-2">Confirm password is a required field.</div>
                      : ''
                    }
                    { !signupForm.confirmPasswordError && signupForm.confirmPasswordError2
                      ? <div data-test="confirmPasswordError2" className="alert alert-danger mt-2">Password and Confirm Password does not match.</div>
                      : ''
                    }
                    <label htmlFor="confirmpasswordInput" className="mb-0 form-label">Confirm Password<span className="text-danger">*</span></label>
                  </div>
                  <p className="text-center mb-0">
                    <input aria-label="Signup" aria-required="true" type="submit" className="btn btn-primary btn-lg w-100 text-uppercase default-btn-style signup-btn" value="Signup" />
                  </p>
                </form>
                
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Signup;