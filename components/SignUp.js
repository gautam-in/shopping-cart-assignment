import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { auth,db } from '../firebase';
import Router from 'next/router';

export default function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');

    const signup = e => {
        e.preventDefault();
        if(password === confirmPassword){
            auth.createUserWithEmailAndPassword(email, password).then((cred) => {
                db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }).then(() => {
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('')
                    setError('');
                    Router.push(`/`,null, { shallow: true });
                }).catch(err => setError(err.message));
            }).catch(err => setError(err.message));
        }
        else{
            setPassError('Password and confirm password should match');
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '20px', alignItems: 'start', justifyContent: 'center' }}>
            <div style={{ width: 'auto', padding: '40px' }}>
                <h3>Signup</h3>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div style={{ padding: '30px' }}>
                <Form onSubmit={signup}>
                    <Form.Group controlId="formGroupFName">
                        <Form.Control type="text" required placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupLName">
                        <Form.Control type="text" required placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword2">
                        <Form.Control type="password" required placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Signup
                    </Button>
                </Form>
                {error && <div style={{ color: 'red', fontSize: '12px', fontWeight: 600 }}>{error}</div>}
                {passError && <div style={{ color: 'red', fontSize: '12px', fontWeight: 600 }}>{passError}</div>}
            </div>
        </div>
    )
}
