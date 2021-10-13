import { Link, NavLink } from 'react-router-dom';
import { useGlobalData } from '../../Context/dataContext';
import Button from '../Button/Button';
import css from './Nav.module.css';
function Nav(){
    let {logOut,user,cart,toggleCart}=useGlobalData();
    return <nav className="wrapper d-flex flex-wrap flex-row align-items-end">
        <div className={css.Logo}><Link to="/"><img src="/static/images/logo.png" alt="Logo" /></Link></div>
        <ul className={css.Menu}>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
        <div className={css.RightMenu +" align-self-center"}>
           <div className={css.Links}>
               <User logOut={logOut} user={user}/>
           </div>
           <div className={css.CartIcon} onClick={toggleCart}>
               <img src="/static/images/cart.svg" alt="my cart" />
               {cart.cartCount} Items
           </div>
        </div>
    </nav>
}
export default Nav;

function User({user,logOut}){
    if(user){
        return <>
                <span>{user.fName}</span>
                <span><Button small onClick={logOut}>Logout</Button></span>
              </>
    }
    return <>
                <span><NavLink to="/signin">Signin</NavLink></span>
                <span><NavLink to="/register">Register</NavLink></span>
           </>
}