import React from "react";
import "./Header.scss";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as CartLogo } from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo_2x.png";
import ApplicationUrls from "../../router/ApplicationRoutes";
import { LABEL } from "../../constants/constant";
import Cart from "../../containers/Cart/Cart";
import { useSelector } from "react-redux";
import { getItem, removeItem } from "../../service/Storage";

export function Header(props) {
  const count = useSelector((state) => state.count);
  const { cartDialog, setCartDialog, cart } = props;
  const [user, setUser] = React.useState(null);
  React.useState(() => {
    const user = JSON.parse(getItem("registered_user"));
    setUser(user);
  }, []);

  const handleLogout = () => {
    removeItem("registered_user");
    props.history.push("/");
    window.location.reload();
  };

  return (
    <header className="header" data-test="component-header">
      {cartDialog && (
        <Cart setCartDialog={setCartDialog} cartDialog={cartDialog} />
      )}
      <section className="container">
        <figure className="logo">
          <img src={Logo} alt="Sabka Bazaar" />
        </figure>
        <nav className="navOptions">
          <span>
            <Link to={ApplicationUrls.HOME}>{LABEL.HOME}</Link>
          </span>
          <span>
            <Link to={ApplicationUrls.PRODUCTS}>{LABEL.PRODUCTS}</Link>
          </span>
        </nav>
        <section className="cartLogoC">
          <section className="cartLogoContainer">
            <nav className="text" data-test="header-nav">
              {user && <span>HI! {user.first_name}</span>}
              {user && (
                <span>
                  <Link onClick={handleLogout}>{LABEL.LOGOUT}</Link>
                </span>
              )}
              {!user && (
                <span>
                  <Link to={ApplicationUrls.LOGIN}>{LABEL.SIGNIN}</Link>
                </span>
              )}

              {!user && (
                <span>
                  <Link to={ApplicationUrls.REGISTER}>{LABEL.REGISTER}</Link>
                </span>
              )}
            </nav>
            <section className="cartIcon" onClick={() => setCartDialog(true)}>
              <button className="cartbtn">
                <CartLogo name="cartButton" fill="#e83583" />
              </button>
              <div>
                {count} {LABEL.ITEMS}
              </div>
            </section>
          </section>
        </section>
      </section>
    </header>
  );
}

export default withRouter(Header);
