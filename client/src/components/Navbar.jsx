import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from './Cart';
const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
let cartClick = false
const Navbar = () => {
    const navigate = useNavigate()
    const [width, setWidth] = useState(getWidth());
    const items = useSelector(state => state);
    const handleOpenCart = () => {
        if (cartClick) {
            if (width > 1200) {
                navigate('products')
                window.$('#myModal').modal();
            }
            else {
                window.$('#myModal').modal('hide');
                navigate('cart')
            }
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

    useEffect(() => {
        handleOpenCart()
        // window.$('#myModal').on('hidden.bs.modal', function (e) {
        //     cartClick=false
        //   })
    }, [width])
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-white navbar-light fixed-top" >
                <div className='container'>

                    <NavLink to='/' className="navbar-brand" ><img src='/static/images/logo.png' alt='logo' /></NavLink>

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
                            <div  className="d-flex auth-sec">
                                    <NavLink to="login" className='mr-2'>
                                        Signin
                                    </NavLink>
                                    <NavLink to="register" className='mr-2'>
                                        Register
                                    </NavLink>
                            </div>
                        )

                    }

                    <a onClick={() => { cartClick = true; handleOpenCart() }} className="navbar-brand navbar-cart "><img src='/static/images/cart.svg' alt='cart' /> <span>{items.cart.cartItems.length} Items</span></a>
                </div>
            </nav>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h6 className="modal-title">My Cart <small>({items.cart.cartItems.length} items)</small></h6>
                            <button type="button" className="close text-white" onClick={() => { cartClick = false }} data-dismiss="modal">&times;</button>
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