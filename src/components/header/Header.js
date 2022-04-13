import styles from "./Header.module.scss";
import CartButton from "./CartButton";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { userActions } from "../../store/userReducer";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.users);
  const userDispatch = useDispatch();

  const signOutHandler = () => {
    userDispatch(userActions.signOut());
  };

  return (
    <Fragment>
      <header className={styles["header-container"]}>
        <div className={styles["header-inner"]}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/static/images/logo.png" alt="sabka-logo" />
            </Link>
          </div>
          <nav className={styles["navigation-links"]}>
            <ul>
              <li>
                <NavLink to="/" className={(navData) => navData.isActive ? styles.activeLink : ''}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/products"  className={(navData) => navData.isActive ? styles.activeLink : ''}>Products</NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles["cart-login-container"]}>
            <div className={styles["login-bar"]}>
              <ul>
                <li>
                  {!isLoggedIn && <NavLink to="/login" className={(navData) => navData.isActive ? styles.activeLink : ''}>SignIn</NavLink>}
                  {isLoggedIn && <span onClick={signOutHandler}>SignOut</span>}
                </li>
                <li>
                  <NavLink to="/signup" className={(navData) => navData.isActive ? styles.activeLink : ''}>Register</NavLink>
                </li>
              </ul>
            </div>
            <CartButton />
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
