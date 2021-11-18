import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='register-page'>
            <aside className='signup-title'>
                <h1>Sign In</h1>
                <p style={{color:'#808080'}}>Get access to your orders, wishlist and recommedations.</p>
            </aside>
            <section className='form-section'>
                <form>
                    <input type='text' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <button className='btn-signup'>Sign In</button>
                    <div style={{textAlign:'center',fontSize:'14px',color:'grey',margin:'5px'}}>Or</div>
                    <div style={{textAlign:'center',fontStyle:'15px'}}>
                        <Link  to='/register'>click here to Register</Link>
                    </div>
                    
                </form>
            </section>
        </div>
    )
}

export default Login
