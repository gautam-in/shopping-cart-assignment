import { Link, NavLink } from 'react-router-dom';
import css from './Nav.module.css';
function Nav(){
    return <nav className="wrapper d-flex flex-wrap flex-row align-items-end">
        <div className={css.Logo}><Link to="/"><img src="/static/images/logo.png" alt="Logo" /></Link></div>
        <ul className={css.Menu}>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
        <div className={css.RightMenu +" align-self-center"}>
           <div className={css.Links}>
               <span><NavLink to="/signin">Signin</NavLink></span>
               <span><NavLink to="/register">Register</NavLink></span>
           </div>
           <div className={css.CartIcon}>
               <img src="/static/images/cart.svg" alt="my cart" />
               0 Items
           </div>
        </div>
    </nav>
}
export default Nav;