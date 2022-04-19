import React from 'react'
import Button from '../../Shared/Button'
import Input from '../../Shared/Input'
import './SignIn.scss'

function SignIn() {
    return (
        <div className="login-container">
           <div className="login-info">
        <h2>
        Login
        </h2>
        <p>Get access to your orders, Wishlist and Recommendations</p>
        </div>
        <div className="login-form">
        <form>
        <Input label="Email"
         name="email"
         type="email"
         //value={email}
         required    
         />
         <Input label="Password"
         name="password"
         type="password"
         //value={email}
         required    
         />
         <Button>Login</Button>
        </form>
        </div>
        </div>
     
    )
}

export default SignIn
