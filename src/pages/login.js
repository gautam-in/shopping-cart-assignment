import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FormInput from '../components/formInput';
import '../styles/login.scss';

const Login = () => {
    const [user, setUser]= useState({
        email:'',
        password:''
    })
    const [validForm, setValidForm] = useState(false);
    const navigate = useNavigate();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const validateLoginSubmit = (e) => {
      e.preventDefault();
      const validEmail = emailRegex.test(user.email);
      const validPassword = user.password.length>5;

      setValidForm(validEmail && validPassword);
      
      const userFromStorage = JSON.parse(localStorage.getItem('user'));

      if(userFromStorage?.email === user.email && userFromStorage?.password === user.password){
        navigate('/home');
      }else{
        alert("Please enter correct email and password");
      }
    }
    return(
        <>
        <Header/>
        <div className="sign-in-content">
            <div className='login-info'>
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className='login-form'>
                <form style={{width:"50%"}} onSubmit={validateLoginSubmit}>
                    <FormInput type="email" name="email" id="email" label="Email" value={user.email} changeHandler={setUser}/>
                    <FormInput type="password" name="password" id="password" label="Password" value={user.password} changeHandler={setUser}/>
                    <button type='submit' id='button'>Login</button>
                </form>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login;