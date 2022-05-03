import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from './Cart';
const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const Navbar = () => {
    const navigate = useNavigate()
    const [width, setWidth] = useState(getWidth());
    const items = useSelector(state => state);
    const handleOpenCart = () => {
        if (width > 1200) {
            window.$('#myModal').modal();
        }
        else {
            window.$('#myModal').modal('hide');
            navigate('cart')
        }
    }

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top" >
                <div className='container'>

                    <a className="navbar-brand" href="/"><img src='/static/images/logo.png' alt='logo' /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item ml-2">
                                <NavLink to="products">
                                    Products
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                    {
                        !items.login.user?.email && (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="login">
                                        Signin
                                    </NavLink>
                                </li>
                                <li className="nav-item ml-2 mr-2">
                                    <NavLink to="register">
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        )

                    }

                    <a onClick={() => { handleOpenCart() }} className="navbar-brand navbar-cart "><img src='/static/images/cart.svg' alt='cart' /> <span>{items.cart.cartItems.length} Items</span></a>
                </div>
            </nav>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h6 className="modal-title">My Cart <small>({items.cart.cartItems.length} items)</small></h6>
                            <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-gray">
                            <Cart />
                        </div>

                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>



    )
}

export default Navbar