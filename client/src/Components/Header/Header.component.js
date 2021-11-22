import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderComponent(props) {
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
                            <div className="col mt-2">
                            <Link className="header-link mx-2" to="/login">Sign In</Link>
                            <Link className="header-link mx-2" to="/register">Register</Link>
                           
                            </div>
                        </div>
                        <div className="row mt-4 mb-0">
                        <button onClick={()=>{props.setToggleModal()}} className=" btn bg-grey header-link m-0 p-2" to="/cart"><i className="fas fa-shopping-cart text-danger"></i>  {props.totalItems} Items</button>
                        </div>
                    </nav>
                </div>
            </div>
            </div>
        </header>
    )
}
