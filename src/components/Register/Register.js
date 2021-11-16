import React from 'react';
import './register.css';

function Register() {
    return (
        <div className='register-page'>
            <aside className='signup-title'>
                <h1>Sign Up</h1>
                <p style={{color:'#808080'}}>We do not share your personal details with anyone.</p>
            </aside>
            <section className='form-section'>
                <form>
                    <input type='text' placeholder='First name' required />
                    <input type='text' placeholder='Last name' required />
                    <input type='text' placeholder='Email' required />
                    <input type='text' placeholder='Password' required />
                    <input type='text' placeholder='Confirm Password' required />
                    <button className='btn-signup'>Sign Up</button>
                </form>
            </section>
        </div>
    )
}

export default Register
