import { Link } from 'react-router-dom';
import useAppStore from '../../utils/store/store';

function Header() {
  const { cart, isLoggedIn, logOut } = useAppStore();

  return (
    <div className="fixed-header">
      <header className="header">
        <Link to="/">
          <img src="/static/images/logo.png" className="logo" alt="Homepage" />
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div className="right">
          {!isLoggedIn && (
            <div className="auth">
              <Link to="/signin">Sign In</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
          {isLoggedIn && (
            <button type="button" className="logout" onClick={logOut}>
              Logout
            </button>
          )}
          <Link to="/cart" type="button" className="cart-icon">
            <img src="/static/images/cart.svg" alt="Cart" />
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
