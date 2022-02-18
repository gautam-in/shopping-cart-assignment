import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.sub__container}>
        <Link to="/">
          <img src={Logo} className={classes.logo__image} alt="logo" />
        </Link>
        <nav className={classes.nav__items}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </nav>
        <div className={classes.nav__wrapper}>
          <nav className={classes.login}>
            <Link to="/signin" className={classes.link}>
              SignIn
            </Link>
            <Link to="/signup" className={classes.link}>
              Signup
            </Link>
          </nav>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
