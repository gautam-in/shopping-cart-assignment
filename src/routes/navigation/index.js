import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import {signOutUser} from "../../utils/firebase";
import logoImgTab from "../../static/images/logo_2x.png";
import logoImgMobile from "../../static/images/logo.png";
import './navigation.scss';
import CartIcon from "../../components/cart-icon";
import CartDropDown from "../../components/cart-dropdown";
import { CartContext } from "../../contexts/banners.context copy";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
        <div className="navigation__container">
            <nav className="navigation wrapper">
                <Link className="logo-container" to='/'>
                    <picture>
                        <source media="(min-width:650px)" srcSet={logoImgTab}/>
                        <img src={logoImgMobile} alt="Sabka Bazaar"/>
                    </picture>
                </Link>
                <div className="nav-links__container">
                    <Link className="nav-link" to='/home'>Home</Link>
                    <Link className="nav-link" to='/products'>Products</Link>
                </div>
                <div className="user__container">
                <div className="user-authentication">
                    {currentUser ? (<span className="nav-link" onClick={signOutUser}> Sign Out</span>)
                    : (
                        <Fragment>
                            <Link className="nav-link" to='/sign-in'>Sign In</Link>
                            <Link className="nav-link" to='/register'>Register</Link>
                        </Fragment>
                    )}
                </div>
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
            </nav>
        </div>
        <div className="wrapper">
            <Outlet/>
        </div>
        </Fragment>
    );
}

export default Navigation;