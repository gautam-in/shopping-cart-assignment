import { useHistory } from "react-router-dom";
import CustomLink from "./custom/NavLink";
import { useDispatch, useSelector } from "react-redux";
import { displayCartItems } from "../utils/Validation";
import { setAuthenticated, toggleModal } from "../redux/actions";
import { Fragment } from "react";
import Toast from "./custom/Toast";

const AppHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.TestReducer.cartData)
    const auth = useSelector(state => state.TestReducer.auth)


    const handleLoginClick = (e) => {
        if (e.target.innerHTML === "Sign out") {
            sessionStorage.clear()
            dispatch(setAuthenticated(false))
        }
    }

    return <Fragment>
        <header className="header-container" data-testid="app-header">
            <div className="toolbar-style">
                <section className="btn-link-container">
                    <div className="app-logo-btn-container">
                        <button data-testid="app-logo" className="icon-button" aria-label="app logo" onClick={() => history.push('/category')}>
                            <img src="/static/images/logo_2x.png" alt="app logo" className="large-icon-style" />
                        </button>
                    </div>
                    <CustomLink to="/category">Home</CustomLink>
                    <CustomLink to="/products/all">Products</CustomLink>
                </section>
                <section>
                    <div>
                        <CustomLink to="/login" onClick={handleLoginClick}>{auth ? "Sign out" : "Sign in"}</CustomLink>
                        <CustomLink to="/register">Register</CustomLink>
                    </div>
                    <div className="cart-container">
                        <button data-testid="cart-logo" className="icon-button" aria-label="cart logo" onClick={() => dispatch(toggleModal(true))} edge="end" color="inherit" aria-label="app logo">
                            <img src="/static/images/cart.svg" alt="cart logo" className="medium-icon-style" />
                        </button>
                        <p>{displayCartItems(cartData)} Items</p>
                    </div>
                </section>
            </div>
        </header>
    </Fragment>
}

export default AppHeader;