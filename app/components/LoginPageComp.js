import React from 'react';
const LoginPageComp = () => {
    return(
        <div className="login-section">
            <div className="inner-login-section floatcontainer">
                <div className="left-sec">
                    <h2>LogIn</h2>
                    <div className="description">Get access to your Orders, Wishlists and Recommendations.</div>
                </div>
                <div className="right-sec">
                    <form>
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
                        {/* <input type="email" name="email" placeholder="Email......" required />
                        <input type="password" name="pwd" placeholder="Password......" required /> */}
                        <button >Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPageComp;