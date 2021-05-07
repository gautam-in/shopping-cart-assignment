import React from 'react'
import Navbar from "../Navbar/Navbar"
export default function Signup() {
    return (
        <div>
            <Navbar/>
            <form>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm Password"/>
            </form>
        </div>
    )
}
