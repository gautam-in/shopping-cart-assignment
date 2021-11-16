import React from 'react'

function Login() {
    return (
        <div className='register-page'>
            <aside className='signup-title'>
                <h1>Sign In</h1>
                <p style={{color:'#808080'}}>Get access to your orders, wishlist and recommedations.</p>
            </aside>
            <section className='form-section'>
                <form>
                    <input type='text' placeholder='First name' required />
                    <input type='text' placeholder='First name' required />
                    <button className='btn-signup'>Sign Up</button>
                </form>
            </section>
        </div>
    )
}

export default Login
