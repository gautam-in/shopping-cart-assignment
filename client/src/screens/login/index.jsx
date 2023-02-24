
import Input from '../../ui/elements/textBox';
import Button from '../../ui/elements/button'

import { disabled, exploreButton } from '../../common/style';
import { useState } from 'react';
import { useFormButtonDisable } from '../../hooks/useFormButtonDissable';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Login = () => {
    const [userDetails, setUserDetail] = useLocalStorage('userDetails');
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { email, password, } = loginForm;
    const isFormButtonDisabled = useFormButtonDisable(loginForm);
    const isFormDisabled = () => {
        return isFormButtonDisabled || errorMessage;
    }
    const handleChangeText = (event) => {
        const { value, name } = event.target || {};
        setErrorMessage('');
        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email: loggedInEmail, password: loggedInPassword } = userDetails;
        if (loggedInEmail === email && loggedInPassword === password) {
            setUserDetail({ ...userDetails, isLoggedIn: true })
        }
        else {
            setErrorMessage('Email or password is incorrect');
        }

    }

    return (<div style={{ display: 'flex', alignSelf: 'center', height: '80%', width: '100%', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <h1>Login</h1>
            <p>We don not share your personal details with anyone</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
            <Input label='Email' type='email' value={email} name='email' onChange={handleChangeText} required />
            <Input label='Password' type='password' value={password} name='password' onChange={handleChangeText} errorMessage={errorMessage} required />
            <Button value='Login' style={isFormDisabled() ? { ...exploreButton, ...disabled } : exploreButton} onClick={handleSubmit} disabled={isFormDisabled()} />
        </div>
    </div>)
}

export default Login;