import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import './signin.css';

function Signin() {

    const history = useHistory()

    function login() {
        history.push('/category/all')
    }

    return (
        <Fragment>
            <div className="signin">
                <div className="signin--panel">
                    <span className="login-text">Login</span>
                    <span className="login-subheader">Get access to your orders. Wishlist and Recommendation.</span>
                </div>

                <div className="signin-form">
                    <form className="signin-form">
                        <div className="input-group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>

                        <div className="input-group">
                            <input type="password" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>
                        <button className="login-btn" onClick={() => login()}>Login</button>
                    </form>
                </div>
            </div>



            <div className="copyright">
                <p className="copyright-text">Copyright &#169; 2011-1018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
            </div>
        </Fragment>

    )
}

export default Signin;