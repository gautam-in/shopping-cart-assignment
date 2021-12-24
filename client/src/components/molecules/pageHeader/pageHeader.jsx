import { Link } from 'react-router-dom';
import CartModal from '../../organisms/cartModal/cartModal';
import * as constants from '../../../constants';
import './pageHeader.scss';
import Image from '../../atoms/image/image';

function PageHeader() {
  return (
    <header className="header">
      <nav className="navbar navbar-light navbar-expand-md bg-white shadow">
        <div className="container">
          <div  className="navbar-brand abs header__logo">
            <Image imageSrc={constants.SABKA_BAAZAR_LOGO} alt="sabka-baazar-logo"  />
          </div>
          <div
          aria-label='collapse-menu'
          role='button'
            className="navbar-toggler ms-auto mx-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="navbar-collapse collapse" id="collapseNavbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link header__link_routes" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__link_routes" to="/products/5b6899953d1a866534f516e2">
                  PRODUCTS
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signIn">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <CartModal />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
