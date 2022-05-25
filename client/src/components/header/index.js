import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import CartDropdown from '../cartDropdown';
import { ROUTES } from '../../utils/constants';
import { isEmpty ,updateDocumentTitle} from '../../utils'
import { useDispatch } from 'react-redux';
import { clearUserDetails } from '../../pages/signIn/signInSlice'
import { setDoumentTitle } from '../../app/appSlice'
import './header.css'
function Header(props) {
  let totalCartItems = useSelector(state => state.productsReducer.totalCartItems)
  let userDetails = useSelector(state => state.userReducer.userDetails)
  let [toggleModal, setToggleModal] = useState(false)
  let [activeRoute , setActiveRoute] = useState('/')
  const location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch()
  useEffect(() => {
    setActiveRoute(updateDocumentTitle(location))
  }, [location]);

  const launchCart = () => {
    setToggleModal(!toggleModal)
    document.body.classList.toggle("no-scroll")
  }

  const signOut = () => {
    dispatch(clearUserDetails())
  }
  return (
    <>

      <header className="header">
        <div className='fluid_container'>
          <div className="header_container">
            <div className='menu_container'>
              <img className="logo" onClick={() => navigate(`${ROUTES.home}`)} src={"../../static/images/logo_2x.png"} alt="logo" />
              <nav className="header_nav hide_mobile">
                <ul>
                  <li key="home"><Link className={`link-text ${activeRoute == ROUTES.home ? 'active' : ''}`} to={`${ROUTES.home}`}>Home</Link></li>
                  <li key="product"><Link className={`link-text ${activeRoute == ROUTES.products ? 'active' : ''}`} to={`${ROUTES.products}`}>Products</Link></li>
                </ul>
              </nav>
            </div>
            <div className="signin_container">
              <nav className="signin_nav hide_mobile">
                <ul>
                  {isEmpty(userDetails) ? <>
                    <li key="signIn"><Link className={`link-text ${activeRoute == ROUTES.signin ? 'active' : ''}`} to={`${ROUTES.signin}`}>SignIn</Link></li>
                    <li key="register"><Link className={`link-text ${activeRoute == ROUTES.signup ? 'active' : ''}`} to={`${ROUTES.signup}`}>Register</Link></li>
                  </> : <li key="signIn"><Link className={`link-text`} to={`${ROUTES.home}`} onClick={() => { signOut() }}>SignOut</Link></li>}
                </ul>
              </nav>
              <button className="cart_button" onClick={() => launchCart()}><i className="fa-solid fa-cart-shopping"></i><span className="cart_items">{totalCartItems} items</span></button>
              {toggleModal && <CartDropdown closeModal={launchCart} {...{ totalCartItems }} />}
            </div>
          </div>
        </div>
        {toggleModal && <div className='back_drop' onClick={() => launchCart()}></div>}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
