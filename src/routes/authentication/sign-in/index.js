// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import FormInput from "../../../components/form-input";
import {
    // auth,
    signInWithGooglePopup,
    signInUserWithEmailAndPassword
    // signInWithGoogleRedirect
} from "../../../utils/firebase";

import '../authentication.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {

    // const { setCurrentUser} = useContext(UserContext);
    // useEffect(() => {
    //     async function fetchData() {
    //         // You can await here
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //         // ...
    //     }
    //     fetchData();
    //     }, []); // Or [] if effect doesn't need props or state

    const [formFields, setFormFields] = useState(defaultFormFields);
    const navigate = useNavigate();
    const {
        email,
        password
    } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInUserWithEmailAndPassword(email, password);
            resetFormFields();
            navigate('/');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Please enter valid email and password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    break;
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async () => {
         await signInWithGooglePopup();
    }
    return (
        <div className="authentication">
            <div className="authentication__info">
                <h1 className="authentication-title">Signin</h1>
                <p className="authentication-desc">We do not share your personal details with anyone</p>
            </div>
            <div className="authentication__form">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label={'Email'}
                        inputOptions={{
                            onChange:handleChange,
                            name:'email',
                            value:email,
                            required: true,
                            type:"email"
                        }}
                    />

                    <FormInput
                        label={'Password'}
                        inputOptions={{
                            onChange:handleChange,
                            name:'password',
                            value:password,
                            required: true,
                            type:"password",
                            minLength: 6,
                            pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])(?!.* ).{6,}$"
                        }}
                    />
                    <Button btnClass='sign-in-btn' type='submit'>Login</Button>
                    <p className="line-break"><span>OR</span></p>
                    <Button btnClass='google-sign-in' type='button' onClick={logGoogleUser}>Sign in with Google</Button>
                </form>
            </div>
        </div>
    );

    // <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
}

export default SignIn;