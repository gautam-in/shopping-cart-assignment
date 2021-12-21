import { Link } from "react-router-dom";
import CartModal from "../../organisms/cartModal/cartModal";
import "./pageHeader.scss";

function PageHeader() {
  return (
    <header className="header">
      <nav class="navbar shadow  p-2 bg-white rounded">
        <div class="container">
          <div>
            <Link to="/">
              <img
                src={"/static/images/logo_2x.png"}
                alt="sabka-baazar-logo"
                width="80"
                height="40"
                // class="d-inline-block align-text-top"
              />
            </Link>
            <Link className="header__link_routes mx-5" to="/">
              HOME
            </Link>
            <Link
              className="header__link_routes mx-n2"
              to="/products/5b6899953d1a866534f516e2"
            >
              PRODUCTS
            </Link>
          </div>
          <div className="d-flex flex-column">
            <div className="p-2">
              <Link className="header__link px-2" to="/signIn">
                Sign In
              </Link>
              <Link className=" header__link px-2" to="/register">
                Register
              </Link>
            </div>
            <CartModal />{" "}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
