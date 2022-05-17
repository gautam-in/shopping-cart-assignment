import { Outlet, Link, useNavigate } from "react-router-dom";
import "./header.scss"

const Header = (props) => {
    let navigate = useNavigate();

    // Render app header.
    return (<>
        <header className="app-header">
            <div className="header-inner-container">
                <img className="app-logo" onClick={() => navigate("/home")} src={window.screenwidth <= "480px" ? "static/images/logo.png" : "static/images/logo_2x.png"} alt="logo" />
                <nav className="header-nav">
                    <ul>
                        <li key="home"><Link className="link-text" to="home">Home</Link></li>
                        <li key="product"><Link className="link-text" to="products">Products</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="cart-signin-div">
                <nav className="signin-nav">
                    <ul>
                        <li key="signIn"><Link className="link-text" to="signIn">SignIn</Link></li>
                        <li key="register"><Link className="link-text" to="signUp">Register</Link></li>
                    </ul>
                </nav>
                <Link className="cart-button" to="/cart"> <img className="cart-img" src="static/images/cart.svg" /> <div className="cart-items">{props.cartItemCount.length} items</div></Link>
            </div>
            <Outlet />
        </header>
    </>)
}

export default (Header);