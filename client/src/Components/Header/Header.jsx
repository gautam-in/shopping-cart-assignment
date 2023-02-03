import { useState } from 'react';
import Cart from '../Cart/Cart';
import {Link,useNavigate} from 'react-router-dom';
import useGetCartData from '../../HOC/useGetCartData';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../../redux/actionMethod/authSlice';
import classes from './Header.module.scss';

const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {totalQty} = useGetCartData();
    const user = useSelector(state => state.auth.loggedInUser);

    const handleLogout = () => {
      dispatch(authActions.logoutUser());
      navigate('/');
    }
    
    const [cartClicked,setCartClicked] = useState(false);
    const handleClick = () => setCartClicked(state => !state);
    return(
        <header className={classes.header_wrapper}>
        <div  className={classes.header_wrapper__container}>
          <img src="/static/images/logo.png" alt="Company logo"  className={classes.header_wrapper__logo} />
        </div>

        <div className={classes.header_wrapper__linkWrapper}>
          <h4 className={classes.header_wrapper__linkWrapper}>
            <Link className={classes.header_wrapper__linkWrapper_link} to='/'>Home</Link>
          </h4>

          <h4 className={classes.header_wrapper__linkWrapper}>
            <Link className={classes.header_wrapper__linkWrapper_link} to='/products'>Products</Link>
          </h4>
        </div>


        <div className={classes.header_wrapper___auth}>
          <div className={classes.header_wrapper___auth_container}>
            {
              Object.keys(user).length ?
              (<>
                <p className={classes.header_wrapper__linkWrapper_link}>logged in as {user?.firstName}</p>
                <div className={classes.header_wrapper__linkWrapper_link} onClick={handleLogout}>Logout</div>
              </>) :
              (
                <>
                <Link className={classes.header_wrapper__linkWrapper_link} to='/signIn'>SignIn</Link>
                <Link className={classes.header_wrapper__linkWrapper_link} to='/register'>Register</Link>
                </>
              )
            }
          </div>

          <div className={classes.header_wrapper__auth_cartWrapper} onClick={handleClick}>
            <div>
            <img src="/static/images/cart.svg" alt="company logo cart" className={classes.header_wrapper__auth_cartImg}/>
            </div>
            <div className={classes.header_wrapper__auth_cartWrapper_cartQty}>
                {totalQty} items
            </div>
          </div>
        </div>
          {cartClicked && <Cart clickHandler={handleClick}/>}
      </header>
    )
}

export default Header;