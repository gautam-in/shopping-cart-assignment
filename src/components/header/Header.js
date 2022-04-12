import styles from "./Header.module.scss";
import CartButton from "./CartButton";
import { Fragment } from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className={styles["cart-login-container"]}>
            <div className={styles["login-bar"]}>
              <ul>
                <li>
                  {!isLoggedIn && <Link to="/login">SignIn</Link>}
                  {isLoggedIn && <span onClick={signOutHandler}>SignOut</span>}
                </li>
                <li>
                  <Link to="/signup">Register</Link>
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
