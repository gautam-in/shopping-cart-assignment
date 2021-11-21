import React from 'react'
import { Link } from 'react-router-dom'
import css from './header.css'
export default function HeaderComponent() {
    return (
        <header className="">
            <div className="container">
            <div className="row">
                <div className="col-2 m-2">
                     <img src="static/images/logo_2x.png" alt="Sabka Bazar" className="img-fluid " /></div>
                <div className="col-6">
                    <nav className="header-links mt-5 mx-5">
                        <ul className="">
                            <li className="px-2"><Link className="header-link" to="">Home</Link></li>
                            <li className="px-2"><Link className="header-link" to="/products">Products</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <nav className="nav2">
                        <div className=" row ">
                            <div className="col">
                            <Link className="header-link mx-2" to="/login">Sign In</Link>
                            <Link className="header-link mx-2" to="/register">Register</Link>
                           
                            </div>
                        </div>
                        <div className="row mt-4">
                        <Link className="header-link " to="/cart">Cart</Link>
                        </div>
                    </nav>
                </div>
            </div>
            </div>
        </header>
    )
}
