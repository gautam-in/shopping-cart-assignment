import React from 'react'
import "./Signup.css"

export default function LoginPage(){

    return(
        <main>
        <section className="signup-section">
            <div className="signup-header">
                <h2>Login</h2>
                <p>Get access to your Orders and Recommendations.</p>
            </div>
           
            <form className="singup-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="submit" className="btn" value="Login"></input>
            </form>
        </section>
    </main>

    )
}