import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <header>
            
            <nav>
                <ul>
                    <li>  <img src="static/images/logo_2x.png" alt="Sabka Bazar" className="logo" /></li>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>
                        <div>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/cart">Cart</Link>

                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
