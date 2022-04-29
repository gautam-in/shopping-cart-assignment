import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../images/logo.png';
import cartIcon from '../../images/cart-icon.png';

import ROUTES from '../../constants/routes';
import { isEmpty } from '../../Utils/utility';
import storageService from '../../services/storageService';
import MyCart from '../MyCart';
import Footer from '../Footer';

import './index.css';

const Header = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const cartData = useSelector(state => state.cartData.cart);

    const userDetails = storageService.getItem('userDetails');

    const [open, setOpen] = useState(false);

    console.log(isLoggedIn)
    
    return <>

        <div className="layout">
            <header>
                <div className="container">
                    {/* ------------- */}
                    <nav className="nav">
                        <section className="nav-logo">
                            <img
                                src={logo}
                                className="nav-logo-img"
                                alt="Sabka Bazaar"
                            />
                        </section>
                        <section className="nav-links">
                            <ul>
                                <li>
                                    <Link className='nav-link' to={ROUTES.home}>Home</Link>
                                </li>
                                <li>
                                    <Link className='nav-link' to={ROUTES.products} >Products</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="nav-carts-auth">
                            {
                                isEmpty(userDetails) && <div className="nav-auth">
                                    <ul>
                                        <li>
                                            <Link className='nav-link' to={ROUTES.login}>Signin</Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link' to={ROUTES.register}>Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            }

                            <div className="nav-carts" onClick={() => setOpen(!open)}>
                                <img
                                    src={cartIcon}
                                    className="cart-icon"
                                    alt="Cart Icon"
                                    width="35"
                                />
                                <span className="cart-item-count">{cartData.length} items</span>
                            </div>
                        </section>
                    </nav>
                    {/* ------------- */}
                </div>
            </header>
            {open && (
                <div className="cart-container" role="dialog" tabIndex="-1">
                    <div className="container">
                        {open && <MyCart open={open} actions={{ setOpen }} />}
                    </div>
                </div>
            )}
            <article>
                <Outlet />
            </article>
            <footer>
                <div className="container">
                    <Footer />
                </div>
            </footer>
        </div>
    </>

}

export default Header;