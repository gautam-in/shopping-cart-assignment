import { useState } from "react";
import Button from "../../../components/button";
import FormInput from "../../../components/form-input";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../../utils/firebase';

import '../authentication.scss';

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Register = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('password do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            if(user) {
                await createUserDocumentFromAuth(user, {displayName: `${firstName} ${lastName}`});
                resetFormFields();
            }
            console.log(user);
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            }
            console.log('Error :: user creation', error);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    return (
        <div className="authentication">
            <div className="authentication__info">
                <h1 className="authentication-title">Signup</h1>
                <p className="authentication-desc">We do not share your personal details with anyone</p>
            </div>
            <form className="authentication__form" onSubmit={handleSubmit}>
            <FormInput
                label={'First Name'}
                inputOptions={{
                    onChange:handleChange,
                    name:'firstName',
                    value:firstName,
                    required: true,
                    type:"text"
                }}
            />

            <FormInput
                label={'Last Name'}
                inputOptions={{
                    onChange:handleChange,
                    name:'lastName',
                    value:lastName,
                    required: true,
                    type:"text"
                }}
            />

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
                    type:"password"
                }}
            />

            <FormInput
                label={'Confirm Password'}
                inputOptions={{
                    onChange:handleChange,
                    name:'confirmPassword',
                    value:confirmPassword,
                    required: true,
                    type:"password"
                }}
            />
            <Button btnClass='sign-up-btn' type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default Register;