import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import './signin.css';

function Register() {

    const history = useHistory()

    function register() {
        history.push('/category/all')
    }

    return (
        <Fragment>
            <div className="signin">
                <div className="signin--panel">
                    <span className="login-text">SignUp</span>
                    <span className="login-subheader">We do not share your personal details with anyone.</span>
                </div>

                <div className="signin-form">
                    <form className="signin-form">
                        <div className="input-group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>FirstName</label>
                        </div>

                        <div className="input-group">
                            <input type="password" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>LastName</label>
                        </div>

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

                        <div className="input-group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Confirm Password</label>
                        </div>

                        <button className="login-btn" onClick={() => register()}>Register</button>
                    </form>
                </div>
            </div>



            <div className="copyright">
                <p className="copyright-text">Copyright &#169; 2011-1018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
            </div>
        </Fragment>

    )
}

export default Register;