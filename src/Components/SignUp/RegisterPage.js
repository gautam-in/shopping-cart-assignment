import React from 'react'
import "./Signup.css"

export default function RegisterPage(){

    return(
        <main>
        
        <section className="signup-section">
            <div className="signup-header">
            <h2>Signup</h2>
            <p>We do not share your personal details with anyone.</p>
            </div>
           
            <form className="singup-form">
           
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="submit" className="btn" value="Signup"></input>
            
     
        </form>

        </section>
    
    </main>
    )
}