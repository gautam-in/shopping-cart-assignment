import { useEffect,useState } from 'react';
import FormGroup from '../../Components/Form/FormGroup';
import { authActions } from '../../redux/actionMethod/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import './SignIn.scss';

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
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
                emailError:'Email should be syntax of abc@x.com'
            }));
        }

        if(fields.password === ''){
            setFields(state => ({...state , passwordError:'Password is required'}));
        } else if(!fields.password.match(passwordRegex)){
            setFields(state => ({
                ...state,
                passwordError:"Password should contain min 8 characters - numbers, alphabets and cannot have spaces."
            }));
        }

        if(fields.email.match(emailRegex) && fields.password.match(passwordRegex)){
            const credentials = {email:fields.email,password:fields.password};
            setFields(state => ({...state , emailError:null, passwordError:null}));
            dispatch(authActions.loginUser(credentials));   
        }
    };

    return (
        <div className='signInContainer'>
            <div className='signInContainer_Body'>
                <h3 className='signInContainer_Header'>Login</h3>
                <p className='signInContainer_SubHeader'>Get access to your orders ,wishlists and Recommendations</p>
                {auth?.status === 'failure' && <p className='signInError'>{auth.error}</p>}
            </div>

            <div className="signInFormContainer">
                <form className='signInForm' onSubmit={handleSubmit}>

                    <FormGroup  type="text" name="email" onChange={handleChange} 
                    value={fields.email} id="email" text="Email" error={fields.emailError}/>

                    <FormGroup  type="password" name="password" onChange={handleChange} 
                    value={fields.password} id="password" text="Password" error={fields.passwordError}/>

                    <button type="submit" name="submit" >Submit</button>
                </form>
            </div>
            
        </div>
    )
};


export default SignIn;