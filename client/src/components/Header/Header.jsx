import React from "react";
import "./Header.scss";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as CartLogo } from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo_2x.png";
import ApplicationUrls from "../../router/ApplicationRoutes";
import { LABEL } from "../../constants/constant";
import { connect } from "react-redux";
import Cart from "../../containers/Cart/Cart";
function Header(props) {
  const { cartDialog, setCartDialog, cart } = props;
  const [user, setUser] = React.useState(null);
  React.useState(() => {
    const user = JSON.parse(localStorage.getItem("registered_user"));
    setUser(user);
  }, [JSON.parse(localStorage.getItem("registered_user"))]);

  const handleLogout = () => {
    localStorage.removeItem("registered_user");
    props.history.push("/");
    window.location.reload();
  };
  console.log(localStorage.getItem("registered_user"));
  return (
    <header className="header">
      {cartDialog && (
        <Cart setCartDialog={setCartDialog} cartDialog={cartDialog} />
      )}
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Sabka Bazaar" />
        </div>
        <nav className="navOptions">
          <span>
            <Link to={ApplicationUrls.HOME}>{LABEL.HOME}</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
        </nav>
        <div className="cartLogoC">
          <div className="cartLogoContainer">
            <nav className="text">
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
            <div className="cartIcon" onClick={() => setCartDialog(true)}>
              <button className="cartbtn">
                <CartLogo name="cartButton" fill="#e83583" />
              </button>
              <div>{props.count} items</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (store) => {
  return {
    count: store.count,
  };
};
export default withRouter(connect(mapStateToProps, null)(Header));
