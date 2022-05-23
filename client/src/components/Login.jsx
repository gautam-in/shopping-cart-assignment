import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../redux/ActionCreators/LoginActions';
import './Login.css'

const loginModel = {
    email: '',
    password: ''
}
const Login = () => {
    const [user, setUser] = useState({ ...loginModel });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registeredUsers = useSelector(state => state.register.registeredUsers)
    const handleChange = (type, value) => {
        let obj = user;
        obj[type] = value;
        setUser(obj)
    }

    const handleSubmit = async () => {
        const existedUser = registeredUsers.filter(item => (item.email == user.email) && (item.password == user.password))
        if (existedUser.length > 0) {
            dispatch(LoginAction(user));
            navigate('/');
        }
        else {
            alert('Username or Password does not match')
        }
    }
    return (
        <div className='react-container p-2' style={{ marginTop: '120px' }}>
            <div className='container-fluid'>
                <div className='row justify-content-center ' >
                    <div className='col-sm-4 mb-3'>
                        <h4><strong>Login</strong></h4>
                        <small><strong>Get access to your Orders ,Whishlist and Recomendations</strong></small>
                    </div>
                    <div className='col-sm-4 '>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                            <div className='sec'>
                                <input type="text" onChange={(e) => { handleChange('email', e.target.value) }} className="inputText" required />
                                <span className="floating-label">Email</span>
                            </div>
                            <div className='sec mt-4'>
                                <input type="password" onChange={(e) => { handleChange('password', e.target.value) }} required />
                                <span className="floating-label">Password</span>
                            </div>
                            <button className='btn btn-danger  mt-4 w-100'  >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login