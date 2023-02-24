
import Input from '../../ui/elements/textBox';
import Button from '../../ui/elements/button'

import { disabled, exploreButton } from '../../common/style';
import { useState } from 'react';
import { useFormButtonDisable } from '../../hooks/useFormButtonDissable';

const Signup = () => {

    const [signupForm, setSignupForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''

    });
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const { firstName, lastName, email, password, confirmPassword } = signupForm;
    const isFormButtonDisabled = useFormButtonDisable(signupForm);
    const isFormDisabled = () => {
        return isFormButtonDisabled || passwordErrorMessage;
    }
    const handleChangeText = (event) => {
        const { value, name } = event.target || {};

        if (name === 'confirmPassword' && value !== signupForm.password) {
            setPasswordErrorMessage('Password does not match')
        }
        if (name === 'confirmPassword' && value === signupForm.password) {
            setPasswordErrorMessage('')
        }
        setSignupForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userDetails', JSON.stringify({ ...signupForm, isLoggedIn: true }));
    }

    return (<div style={{ display: 'flex', alignSelf: 'center', height: '80%', width: '100%', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <h1>Signup</h1>
            <p>We do not share your personal details with anyone</p>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Input label='First Name' value={firstName} name='firstName' onChange={handleChangeText} required />
            <Input label='Last Name' value={lastName} name='lastName' onChange={handleChangeText} required />
            <Input type='email' label='Email' value={email} name='email' onChange={handleChangeText} required />
            <Input type='password' label='Password' value={password} name='password' onChange={handleChangeText} required />
            <Input type='password' label='Confirm Password' value={confirmPassword} name='confirmPassword' onChange={handleChangeText} errorMessage={passwordErrorMessage} required />
            <Button type='submit' style={isFormDisabled() ? { ...exploreButton, ...disabled } : exploreButton} value='Signup' onClick={handleSubmit} disabled={isFormDisabled()} />
        </form>
    </div>)
}

export default Signup;