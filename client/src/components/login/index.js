import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
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
                                    Login Below
                              </h3>
                                <p>Don't have an account? <Link to="/register" className="link">Register</Link></p>
                            </div>

                        </div>
                        <form>
                            <div className='row'>
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

                            </div>
                            <div className="col-8 offset-2">
                                <button className="btn loginbtn" type="submit">
                                    Log In
			 	  				</button>
                            </div>
                        </form>
                    </div>
                </div>
           
        )
    }
}
export default Login;