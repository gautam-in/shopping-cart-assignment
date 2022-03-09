import React from 'react'
import {Link} from 'react-router-dom'

import Logo from './logo.png'
import classes from './Header.module.css'
import Cart from '../cart/Cart'

const Header = () => {

return (
    <header className={classes.header}>
        <div className={classes.sub__container}>
            <Link to="/">
                <img src={Logo} alt="logo" className={classes.logo__image} />
            </Link>
            <nav className={classes.nav__items}>
                <Link to="/" className={classes.link}>
                    HOME
                </Link>
                <Link to="/Products" className={classes.link}>
                    Products
                </Link>
            </nav>

            <div className={classes.nav__wrapper}>
                <nav className={classes.login}>
                    <Link to="/Login" className={classes.link}>
                        SignIn
                    </Link>
                    <Link to="/Signup" className={classes.link}>
                        SignUp
                    </Link>
                </nav>
                <Cart />
            </div>
        </div>

    </header>
)
}

export default Header 