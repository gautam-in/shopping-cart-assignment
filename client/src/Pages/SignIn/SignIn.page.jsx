import { useEffect,useState } from 'react';
import FormGroup from '../../Components/FormGroup/FormGroup.component';
import { authActions } from '../../redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import {SignInContainer,SignInMetaContainer,SignInHeading,SignInMetaData,SignInFormContainer,SignInForm,SignInError} from './SignIn.styles';
import {AppButton} from '../../Components/Buttons/Buttons.styles';

const SignIn = props =>{
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(auth.status !== null && auth.error !== null)
        dispatch(authActions.resetError());
    },[dispatch]);

    const [fields,setFields] = useState({
        email:'',
        emailError:null,
        password:'',
        passwordError:null
    }); 
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passwordRegex=/(?=.*\d)(?=.*[a-z])(?=.[A-Z]).{6,}/;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFields(state => ({...state , [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

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
        }

        if(fields.email.match(emailRegex) && fields.password.match(passwordRegex)){
            const credentials = {email:fields.email,password:fields.password};
            setFields(state => ({...state , emailError:null, passwordError:null}));
            dispatch(authActions.loginUser(credentials));   
        }
    };

    return (
        <SignInContainer>
            <SignInMetaContainer>
                <SignInHeading>Login</SignInHeading>
                <SignInMetaData>Get access to your orders ,wishlists and Recommendations</SignInMetaData>
                {auth?.status === 'failure' && <SignInError>{auth.error}</SignInError>}
            </SignInMetaContainer>

            <SignInFormContainer>
                <SignInForm onSubmit={handleSubmit}>

                    <FormGroup type="text" name="email" onChange={handleChange} 
                    value={fields.email} id="email" text="Email" error={fields.emailError}/>

                    <FormGroup type="password" name="password" onChange={handleChange} 
                    value={fields.password} id="password" text="Password" error={fields.passwordError}/>

                    <AppButton type="submit" name="submit" >Submit</AppButton>
                </SignInForm>
            </SignInFormContainer>
            
        </SignInContainer>
    )
};


export default SignIn;