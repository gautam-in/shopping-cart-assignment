import { NavLink, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import { useSelector } from 'react-redux'
import './Header.css'


const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
let cartClick = false

const  Header = () => {
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

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        
            <NavLink to="/" className="navbar-brand">
                <img className="img-fluid logo" src="static/images/logo.png" alt="" />
            </NavLink>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {width < 768 ?   <a onClick={() => { cartClick = true; handleOpenCart() }} className="navbar-brand navbar-cart "><img src='/static/images/cart.svg' alt='cart' /> <span>{items.cart.cartItems.length} Items</span></a> : <></>}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="products">
                        Products
                </NavLink>
                
            </li>
            <li className="nav-item  cart">
            {
                        !items.login.user?.email && (
                            <div  className="d-flex auth-sec">
                                    <NavLink to="login" className='mr-2 nav-link p-0'>
                                        Signin
                                    </NavLink>
                                    <NavLink to="register" className='mr-2 nav-link p-0'>
                                        Register
                                    </NavLink>
                            </div>
                        )

                    }

                    <a onClick={() => { cartClick = true; handleOpenCart() }} className="navbar-brand navbar-cart "><img src='/static/images/cart.svg' alt='cart' /> <span>{items.cart.cartItems.length} Items</span></a>
            </li>
        
            </ul>
        
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
                    </div>
                </div>
            </div>
    </>
    

    

);
}



export default Header