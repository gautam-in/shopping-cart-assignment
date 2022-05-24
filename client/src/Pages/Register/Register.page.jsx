import { useEffect, useState } from 'react';
import FormGroup from '../../Components/FormGroup/FormGroup.component';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../../redux/slice/authSlice';

import {RegisterContainer,RegisterMetaContainer,RegisterHeading,
    RegisterMetaData,RegisterFormContainer,RegisterForm,
    RegisterError} from './register.styles.jsx';
import { AppButton } from '../../Components/Buttons/Buttons.styles';

const Register = props =>{
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [fields,setFields] = useState({
        firstName:'',
        firstNameError:null,
        lastName:'',
        lastNameError:null,
        email:'',
        emailError:null,
        password:'',
        passwordError:null,
        confirmPassword:''
    }); 

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex=/(?=.*\d)(?=.*[a-z])(?=.[A-Z]).{6,}/;

    useEffect(()=>{
        if(auth.status !== null && auth.error !== null)
        dispatch(authActions.resetError());
    },[dispatch]);
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(fields.firstName === '')
            setFields(state => ({...state , firstNameError:'firstName is required'}));

        if(fields.lastName === '')
            setFields(state => ({...state , lastNameError:'lastName is required'}));

        if(fields.email === ''){
            setFields(state => ({...state , emailError:'Email is required'}));
        } else if(!fields.email.match(emailRegex)){
            setFields(state => ({
                ...state,
                emailError:'Email should be syntax of xxx@x.xxx'
            }));
        }

        if(fields.password === ''){
            setFields(state => ({...state , passwordError:'Password is required'}));
        } else if(!fields.password.match(passwordRegex)){
            setFields(state => ({
                ...state,
                passwordError:"Password should contain min 6 characters - numbers,alphabets and cannot have spaces."
            }));
        }else if(fields.password !== fields.confirmPassword){
            setFields(state => ({
                ...state,
                passwordError:"Password and ConfirmPassword should match."
            }));
        }

        if(fields.firstName.length !== 0 &&
           fields.lastName.length !== 0 && 
           fields.email.match(emailRegex) &&
           fields.password.match(passwordRegex) &&
           fields.password === fields.confirmPassword)
           {
            const credentials = {firstName:fields.firstName, lastName:fields.lastName,email:fields.email,password:fields.password};
            setFields(state => ({...state , firstNameError:null, lastNameError:null, emailError:null, passwordError:null}));
            dispatch(authActions.registerUser(credentials)); 
        }
    };

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFields(state => ({...state , [name]:value}))
    }

    return (
        <RegisterContainer>
                    <RegisterMetaContainer>
                        <RegisterHeading>Signup</RegisterHeading>
                        <RegisterMetaData>We do not share your personal details with anyone.</RegisterMetaData>
                        {auth?.status === 'failure' && <RegisterError>{auth.error}</RegisterError>}
                    </RegisterMetaContainer>

                    <RegisterFormContainer>
                        <RegisterForm onSubmit={handleSubmit}>

                            <FormGroup type="text" name="firstName" onChange={handleChange} 
                            value={fields.firstName} id="firstName" text="First Name" 
                            error={fields.firstNameError}
                            />
                            
                            <FormGroup type="text" name="lastName" onChange={handleChange} 
                            value={fields.lastName} id="lastName" text="Last Name"
                            error = {fields.lastNameError}
                            />

                            <FormGroup type="text" name="email" onChange={handleChange} 
                            value={fields.email} id="email" text="Email"
                            error = {fields.emailError}
                            />

                            <FormGroup type="password" name="password" onChange={handleChange} 
                            value={fields.password} id="password" text="Password"
                            error = {fields.passwordError}
                            />

                            <FormGroup type="password" name="confirmPassword" onChange={handleChange} 
                            value={fields.confirmPassword} id="confirmPassword" text="Confirm Password"/>

                            <AppButton type="submit" name="submit" >Submit</AppButton>

                        </RegisterForm>
                    </RegisterFormContainer>
                    
                </RegisterContainer>
    )
};

export default Register;