import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
class Register extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='card1'>
                <div class='card'>
                    <div className='container'>
                        <div className="row">
                            <div className='returnHome'>
                                <Link to='/' className='link'>Return Home</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <h3>
                                    Login In
              </h3>
                                <p>Already have an account? <Link to="/login" className="link">Log In</Link></p>
                            </div>

                        </div>
                        <form>
                            <div className='row'>
                                <div className="col-8 offset-2">
                                    <form class="login-form">
                                        <input type="text" placeholder="Enter your name" />
                                    </form>

                                </div>

                                <div className="col-8 offset-2">
                                    <form class="login-form">
                                        <input type="text" placeholder="Enter your Email" />
                                    </form>

                                </div>
                                <div className="col-8 offset-2">
                                    <form class="login-form">
                                        <input type="text" placeholder="Enter your passowrd" />
                                    </form>

                                </div>
                                <div className="col-8 offset-2">
                                    <form class="login-form">
                                        <input type="text" placeholder="Re-Type your passowrd" />
                                    </form>

                                </div>

                            </div>
                            <div className="col-8 offset-2">
                                <button className="btn signupbtn" type="submit">
                                    Sign Up
			 	  				</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;