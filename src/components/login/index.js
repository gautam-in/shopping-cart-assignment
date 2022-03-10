import React, {useState} from "react";
import  {useNavigate} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import "../login/login.scss";

const Login = (props) => {
  const navigate = useNavigate();

  let [loginForm, setLoginForm] = useState({
    email: '',
    emailErrorText: false,
    password: '',
    passwordErrorText: ''
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
    const { name, value }= e.target;
    const newLoginForm = {
      ...loginForm,
      [name]: value,
    };
   
    if(name === "email") {
      newLoginForm.emailErrorText = checkEmailError(value);
    } else {
      newLoginForm.passwordErrorText = checkPasswordError(value);
    }
    setLoginForm(newLoginForm);
  }

  function handleSubmit(e) {
    const { email, password } = loginForm;
    const newLoginForm = {
      ...loginForm,
      emailErrorText: checkEmailError(email),
      passwordErrorText: checkPasswordError(password),
    };
    const { emailErrorText, passwordErrorText } = newLoginForm;
    setLoginForm({...newLoginForm});
    if (!emailErrorText && !passwordErrorText ) {
      navigate("/home");
    }
    e.preventDefault(); 
  }

  return (      
      <section className='login-wrapper'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='loginText-wrapper'>
                <h3 className="heading-text">Login</h3>
                <p>Get access to your Orders. Whishlist and Recommendations.</p>
              </div>
            </Col>
            <Col md={6}>
            <div className="card border-0 px-3 mx-auto mt-5">
              <div className="card-body">
                <form action="/" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                  <div className="form-group">
                    <input aria-label="email" aria-required="true" id="emailInput" name="email" type="email" placeholder="Email" className="form-control form-field" value={loginForm.email} onChange={handleChange} />
                    { loginForm.emailErrorText &&
                      <div data-test="emailErrorText" className="alert alert-danger mt-2">{loginForm.emailErrorText}</div>
                    }
                    <label htmlFor="emailInput" className="mb-0 form-label">Email<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-group">
                    <input aria-label="password" aria-required="true" id="passwordInput" name="password" type="password" placeholder="Password" className="form-control form-field" value={loginForm.password} onChange={handleChange} />
                    { loginForm.passwordErrorText && <div data-test="passwordErrorText" className="alert alert-danger mt-2">{loginForm.passwordErrorText}</div>
                    }
                    <label htmlFor="passwordInput" className="mb-0 form-label">Password<span className="text-danger">*</span></label>
                  </div>
                  <p className="text-center mb-0">
                    <input aria-label="login" aria-required="true" type="submit" className="btn btn-primary btn-lg w-100 text-uppercase default-btn-style login-btn" value="Login" />
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

export default Login;