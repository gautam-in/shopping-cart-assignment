import React from 'react'
import Button from '../../Shared/Button'
import Input from '../../Shared/Input'
import './Register.scss'

function Register() {
    return (
        <div className="signUp-container">
           <div className="signUp-info">
        <h2>
        Signup
        </h2>
        <p>We donot share your personal details with anyone</p>
        </div>
        <div className="signUp-form">
        <form>
        <Input label="First Name"
         name="fname"
         type="text"
         //value={email}
         required    
         />
         <Input label="Last name"
         name="lname"
        // type="text"
        pattern = "[A-Za-z]"
         //value={email}
         required    
         />
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
          <Input label="Confirm Password"
         name="confirmpassword"
         type="password"
         //value={email}
         required    
         />
         <Button>SignUp</Button>
        </form>
        </div>
        </div>
     
    )
}

export default Register
