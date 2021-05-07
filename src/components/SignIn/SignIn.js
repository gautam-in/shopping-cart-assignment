import React from 'react'
import Navbar from "../Navbar/Navbar"
export default function SignIn() {
    return (
        <div>
            <Navbar />

            <div className="main1">
                <div className="login-text">Login</div>
                <div className="login-form">
                    <form>
                        <div>
                            <label>Email</label>
                        <input type="text" placeholder="Email" />
                        </div>
                        <div>
                        <label>Password</label>

                        <input type="text" placeholder="Password" />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}
