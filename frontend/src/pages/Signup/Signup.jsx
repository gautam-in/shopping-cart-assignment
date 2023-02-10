import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormHeader, InputContainer, SignupButton, SignupContainer } from './Signup.styled';

const Signup = ({showToast}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    if (!confirmPassword) {
      isValid = false;
      setConfirmPasswordError("Confirm password is required");
      confirmPasswordRef.current.focus();
    }else if (password !== confirmPassword) {
      isValid = false;
      setPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
      confirmPasswordRef.current.focus();
    }
    if (!password) {
      isValid = false;
      setPasswordError("Password is required");
      passwordRef.current.focus();
    }else if (
      password.length < 6 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      /\s/.test(password)
    ) {
      isValid = false;
      setPasswordError("Password must be at least 6 characters long and contain a number, alphabet, and cannot have spaces");
      passwordRef.current.focus();
    }
    if (!email) {
      isValid = false;
      setEmailError("Email is required");
      emailRef.current.focus();
    }else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      setEmailError("Email is invalid");
      emailRef.current.focus();
    }
    if (!lastname) {
      isValid = false;
      setLastnameError("Last Name is required");
      lastnameRef.current.focus();
    }
    if (!firstname) {
      isValid = false;
      setFirstnameError("First Name is required");
      firstnameRef.current.focus();
    }
    if (isValid) {
      showToast()
      navigate('/');
    }
  };

  return (
    <SignupContainer>
      <FormHeader>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </FormHeader>

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <label className='.label' htmlFor="firstname">First Name<span aria-hidden="true" >*</span></label>
          <input
            ref={firstnameRef}
            aria-label="firstname"
            aria-required={true}
            aria-describedby="firstnameError"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            onBlur={() =>
              !(firstname.trim()) ? setFirstnameError("Firstname is required") : setFirstnameError("")
            }
          />
          {firstnameError && (
            <div role="alert" className='error-msg'>
              <small id="firstnameError">{firstnameError}</small>
            </div>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="lastname">Last Name<span aria-hidden="true" >*</span></label>
          <input
            ref={lastnameRef}
            aria-label="lastname"
            aria-required={true}
            aria-describedby="lastnameError"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            onBlur={() =>
              !(lastname.trim()) ? setLastnameError("Username is required") : setLastnameError("")
            }
          />
          {lastnameError && (
            <div role="alert" className='error-msg'>
              <small id="lastnameError">{lastnameError}</small>
            </div>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email<span aria-hidden="true" >*</span></label>
          <input
            ref={emailRef}
            aria-label="email"
            aria-required={true}
            aria-describedby="emailError"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() =>
              !email ? setEmailError("Email is required") : ((!/\S+@\S+\.\S+/.test(email)) ? setEmailError("Email is invalid") : setEmailError(""))
            }
          />
          {emailError && (
            <div role="alert" className='error-msg'>
              <small id="emailError">{emailError}</small>
            </div>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">Password:<span aria-hidden="true" >*</span></label>
          <input
            ref={passwordRef}
            aria-label="password"
            aria-required={true}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={() =>
              !password ? setPasswordError("Password is required") : (
      (password.length < 6 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      /\s/.test(password) ? setPasswordError("Password must be at least 6 characters long and contain a number, alphabet, and cannot have spaces") : setPasswordError(''))
    ) 
            }
          />
          {passwordError && (
            <div role="alert" className='error-msg'>
              <small>{passwordError}</small>
            </div>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="confirmPassword">Confirm Password:<span aria-hidden="true" >*</span></label>
          <input
            ref={confirmPasswordRef}
            aria-label="confirmPassword"
            aria-required={true}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            onBlur={() =>
              !confirmPassword ? setConfirmPasswordError("Confirm password is required") : setConfirmPasswordError("")
            }
          />
          {confirmPasswordError && (
            <div role="alert" className='error-msg'>
              <small>{confirmPasswordError}</small>
            </div>
          )}
        </InputContainer>

        <SignupButton type="submit">Signup</SignupButton>
      </Form>
    </SignupContainer>
  );
}

export default Signup

