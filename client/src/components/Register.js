import React,{useRef, useState} from 'react'
import '../styles/loginregister.scss'
import InputField from './UI/InputField'
import Constants from '../utils.js/Constants'
import ButtonComponent from './UI/ButtonComponent'
const Register = () => {
	document.title = "Register"
	const [userCreated, setUserCreated] = useState(false);
	// const [formErrors,setFormErrors] = useState(null);
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const successRef = useRef();
	const handleRegister =(e) => {
		e.preventDefault();
		if(password.current.value !== confirmPassword.current.value)
		{
			confirmPassword.current.focus();
			confirmPassword.current.style.border = "1px solid red";
			
			// setFormErrors({confirmPassword:'Password and Confirm Password should match'});
			return false;
		}
		const requestData = {
			firstName:firstName.current.value,
			lastName:lastName.current.value,
			email:email.current.value,
			password:password.current.value,
			confirmPassword:confirmPassword.current.value
		}
		const requestBody = {
			method:'POST',
			headers: Constants.headers,
			body: JSON.stringify(requestData)
		}
		
		fetch(`${Constants.baseUrl}${Constants.usersAPI}`,requestBody)
		.then(response => response.json())
		.then(data => {
			setUserCreated(true);
			const timer = setTimeout(() => {
				setUserCreated(false);
			  }, 3000);
			  
			  return () => clearTimeout(timer);
			}
		);
		firstName.current.value='';
		lastName.current.value='';
		email.current.value='';
		password.current.value='';
		confirmPassword.current.value='';
	}

  return (
	<div className='lr-container'>
	  <div className='lr__form__text'>
		<h1>Signup</h1>
		<p>We do not share your personal details with anyone.</p>
		{userCreated && <p>User Registered successfully!!! </p>}
		{/* <p>{errorRef.current.value} </p> */}
	  </div>
	  <div className='lr__form'>
		<form onSubmit={handleRegister}>
			<InputField type='text' name='firstName' ref={firstName} label='First Name'/>
			<InputField type='text' name='lastName' ref={lastName} label='Last Name'/>
			<InputField type='email' name='email' ref={email} label='Email'/>
			<InputField type='password' name='password' ref={password} label='Password'/>
			<InputField type='password' name='confirmpassword' ref={confirmPassword} label='Confirm Password'/>
			<ButtonComponent buttonText='Register' value='register' name='register' type='submit' />
		</form>
	  </div>
	</div>
  )
}

export default Register