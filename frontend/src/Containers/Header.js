import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory,Link} from 'react-router-dom';
import * as userAction from '../store/actions/userAction';
import './Header.css';

const Header = () => {

    const cartItems = useSelector(state => state.Cart.items);
    const isLoggedIn = useSelector(state => state.User.isLogin);
    const history = useHistory();
    const dispatch = useDispatch();

    const cartRouteHandler = () => {
        history.push("/cart");
    }

    const signOut = () => {
        dispatch(userAction.logout());
    }
    return(
        <>
        <header>
            <div style={{display:'flex',width:'50%'}}>
                <img src={process.env.PUBLIC_URL + '/static/images/logo.png'} alt="Logo" width="50%"/>
                <div className="mobileView">
                    <Link to="/"> Home </Link>
                    <Link to="/products"> Products </Link>
                </div>
            </div>
            <div className="header-right">
                {isLoggedIn?
                    <div className="mobileView">
                        <Link to="/" onClick={signOut}> SignOut </Link>
                    </div>:
                    <div className="mobileView">
                        <Link to="/"> SignIn </Link>
                        <Link to="/register"> Register </Link>
                    </div>}
                <div className="cart" onClick={cartRouteHandler}>
                    <img src={process.env.PUBLIC_URL + "/static/images/cart.svg"} alt="Cart" className="cart-icon"/>
                    <span> {cartItems.length} items </span>
                </div>
            </div>
        </header>
        <hr/>
        </>
    )

}

export default Header;