import React,{ useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FormInput from '../components/formInput';
import { register } from '../store/reducers/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../styles/login.scss';

const Register = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        errors:{}
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validateForm = () => {
        let formIsValid = true;
         let errors=user.errors;
        // let errors={};

        if(!user.firstName){
            formIsValid = false;
            errors["firstName"]="Please enter your first name";
        }
        if(!user.lastName){
            formIsValid = false;
            errors["lastName"]="Please enter your last name";
        }
        if(user.email === " "){
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(user.email)){
                formIsValid=false;
                errors["email"]="Please enter correct email address";
            }
        }
        if(!user.password){
            formIsValid = false;
            errors["password"]="Please enter your password";
        }
        if(!user.confirmPassword){
            formIsValid = false;
            errors["password"]="Please enter confirm password";
        }

        if(user.password){
            if (!user.password.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)) {
                formIsValid = false;
                errors["password"] =
                  "Password should have minimum 6 charecters and should contain numbers and alphabet";
              }
        }

       if(user.confirmPassword){
            if (!user.confirmPassword.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)) {
                formIsValid = false;
                errors["password"] =
                  "Password should have minimum 6 charecters and should contain numbers and alphabet";
              }
        }

        if(user.password && user.confirmPassword){
            if(user.password !== user.confirmPassword){
                formIsValid=false;
                errors["confirmPassword"]="Password did not match";
            }else{
                formIsValid=true;
            }
        }
        return formIsValid;
    }

    const registerUser = (e) => {
        e.preventDefault();
        if(validateForm()){
          dispatch(register(user));
          alert("registration successful");
          navigate("/signIn");
        }else{
            alert("Please enter proper details");
        }
    }
    return(
        <>
        <Header/>
        <div className="sign-in-content">
            <div className='login-info'>
                <h2>Signup</h2>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className='login-form' >
                <form style={{width:"50%"}} onSubmit={registerUser}>
                    <FormInput type="text" name="firstName" id="firstName" label="First Name" changeHandler={setUser} value={user.firstName} error={user.errors.firstName}/>
                    <FormInput type="text" name="lastName" id="lastName" label="Last Name" changeHandler={setUser} value={user.lastName} error={user.errors.lastName}/>
                    <FormInput type="email" name="email" id="email" label="Email" changeHandler={setUser} value={user.email} error={user.errors.email}/>
                    <FormInput type="password" name="password" id="password" label="Password" changeHandler={setUser} value={user.password} error={user.errors.password}/>
                    <FormInput type="password" name="confirmPassword" id="cnfirm password" label=" Confirm Password" changeHandler={setUser} value={user.confirmPassword} error={user.errors.confirmPassword}/>
                    <button type='submit' id='button'>Register</button>
                </form>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Register;