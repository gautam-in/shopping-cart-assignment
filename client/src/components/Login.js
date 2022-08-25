import React,{useRef, useState} from 'react';
import InputField from "./UI/InputField"
import ButtonComponent from './UI/ButtonComponent';
import '../styles/loginregister.scss'
import Constants from '../utils.js/Constants';
const Login = () => {
	document.title = "Login"
	const [message, setMessage] = useState(null);
	const [userLogged,setUserLogged] = useState(null)
	const emailRef = useRef();
	const passwordRef = useRef();
	const formSubmitHandler = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const url = `users?email=${email}&password=${password}`;
		fetch(`${Constants.baseUrl}${url}`)
		.then(response => response.json())
		.then(data => {
			data.length > 0 ? setMessage('User Logged In successfully') : setMessage('Something went wrong while Logging in!');
			setUserLogged(data[0]);
			const timer = setTimeout(() => {
				setMessage(null);
			  }, 3000);
			  
			  return () => clearTimeout(timer);
			})
		emailRef.current.value = '';
		passwordRef.current.value = '';
		
	}
	return (
		<div className='lr-container'>
			<div className='lr__form__text'>
				<h1>Login</h1>
				<p>Get access to your Orders. Wishlist and Recommendations</p>
				{message && <p>{message} </p>}
				{userLogged && <p>{userLogged.firstName}</p>}
			</div>
			<div className='lr__form'>
				<form onSubmit={formSubmitHandler}>
					<InputField type='text' name='email' label='Email' ref={emailRef}/>
					<InputField type='password' name='password' label='Password' ref={passwordRef} />
					<ButtonComponent buttonText='Login' value='Login' name='Login' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default Login;
