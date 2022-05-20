import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={require("./logo.png")} alt="sabka bazaar" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            products
          </Link>
          <Link className="nav-link" to="/signin">
            SignIn
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <div>cart logo</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
