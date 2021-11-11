import './App.css'

import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="nav-bar">
        <img src='/images/headimg.png' />
        <nav>
        <Link to="/">Home</Link>
        <Link to="/products/AllProducts">Products</Link>
        <div className="nav-right">
            <Link to="/signin"> Sign In</Link>
            <Link to="/register"> Register</Link>
            </div>
        </nav>
        </div>
    );
}