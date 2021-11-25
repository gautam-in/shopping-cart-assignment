import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.css';
import { userLogin } from '../../redux/auth/auth-actions';

function Login() {
    
    const [logindetails, setloginDetails] = useState({
        email:'',
        password: ''
    });
    const [errmsg, seterrMsg] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
        const obj = JSON.parse(localStorage.getItem('userDetails'));
        if(obj!==null && obj.email === logindetails.email && obj.password === logindetails.password) {
            //console.log('login success');
            sessionStorage.setItem('isLogin', 'true');
            sessionStorage.setItem('username', String(obj.firstname));
            dispatch(userLogin());
            history.push('/');
            seterrMsg('');
        }
        else {
            seterrMsg('Invalid login credentials!');
        }
        

    }

    const handleForm = (e) => {
        setloginDetails({...logindetails, [e.target.name]:e.target.value});
    }

    return (
        <div className='register-page'>
            <aside className='signup-title'>
                <h1>Sign In</h1>
                <p style={{color:'#808080'}}>Get access to your orders, wishlist and recommedations.</p>
            </aside>
            <section className='form-section'>
                <form>
                    <input type='text' value={logindetails.email} onChange={handleForm} name='email' placeholder='Email' required />
                    <input type='password' value={logindetails.password} onChange={handleForm} name='password' placeholder='Password' required />
                    {errmsg.length!==0 && <div style={{color:'red',fontSize:'12px'}}>{errmsg}</div>}
                    <button onClick={loginHandler} className='btn-signup'>Sign In</button>
                   
                    <div style={{textAlign:'center',fontSize:'14px',color:'grey',margin:'5px'}}>Or</div>
                    <div style={{textAlign:'center'}}>
                        <Link style={{fontSize:'13px'}} to='/register'>Click here to Register</Link>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default Login
