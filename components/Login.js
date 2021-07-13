import { Form, Button } from 'react-bootstrap';
import Router from 'next/router';
import { auth } from '../firebase';
import { useState} from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            Router.push(`/`,null, { shallow: true });
        }).catch(err => setError(err.message));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '20px', alignItems: 'start', justifyContent: 'center' }}>
            <div style={{ width: 'auto', padding: '40px' }}>
                <h3>Login</h3>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div style={{ padding: '40px' }}>
                <Form onSubmit={login}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button><br /><br />
                    {error && <div style={{ color: 'red', fontSize: '12px', fontWeight: 600 }}>{error}</div>}
                </Form>
            </div>
        </div>
    )
}
