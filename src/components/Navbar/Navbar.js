import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../logo.png';
import {useSelector} from 'react-redux';

function Navbar() {
    const [loginstatus, setloginStatus] = useState(false);
    const [username, setusername] = useState(null);
    const cart = useSelector(state => state.shop.cart);
    const isLogin = useSelector(state => state.auth.isLogin);
    const sessionlogin = sessionStorage.getItem('isLogin');

    useEffect(() => {
        setloginStatus(isLogin || sessionlogin);
        setusername(sessionStorage.getItem('username'));
    }, [isLogin,sessionlogin]);
    

    return (
        
        <header className='header'>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img className='logo-img' src={logo} alt='logo' height='73' width='120'/></Link>
                </div>
                <div className='menu'>
                    <Link className='left-nav-menu' to='/'><div>Home</div></Link>
                    <Link className='left-nav-menu' to='/products'><div>Products</div></Link>
                </div>
                <div className='right-menu'>
                    <div className='right-flex'>
                        {loginstatus ? <div className='right-nav-menu'>Welcome, {username}</div> : <>
                            <Link className='right-nav-menu' to='/login'><div>SignIn</div></Link>
                            <Link className='right-nav-menu' to='/register'><div>Register</div></Link>
                        </>}
                            
                    </div>
                    <Link style={{textDecoration:'none',color:'black'}} to='/cart' className='cart'>
                        <img src='/static/images/cart.svg' alt='cart' height='28' width='28'/>
                        <div style={{marginLeft:'10px',fontSize:'13px'}}>{cart.length} items</div>
                    </Link>

                </div>
            </nav>
        </header>
        
        
    )
}

export default Navbar
