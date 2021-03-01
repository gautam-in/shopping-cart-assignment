import React from 'react';

const RagisterComp = () => {
    return (
        <div className="login-section">
            <div className="inner-login-section floatcontainer">
                <div className="left-sec">
                    <h2>Signup</h2>
                    <div className="description">We do not share your personal details with anyone.</div>
                </div>
                <div className="right-sec">
                    <form>
                        <div className="input-group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>First Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Last Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required />
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
                            <input type="password" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Confirm Password</label>
                        </div>
                        <button >SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RagisterComp;