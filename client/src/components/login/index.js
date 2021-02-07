import React from 'react';

import { Link } from 'react-router-dom'; 
import TextField from '@material-ui/core/TextField';
import './index.scss';
function Login() { 
 
   
        return (
            <div>
                <div>
                    <span className="login">
                        Login
                   </span>
                    <span className="login2">
                        Get access to  your Orders,Wishlist and Recommendations
                   </span>
                </div>
                <div>
                  
                        <TextField id="standard-basic" label="Email" />
                        <TextField id="standard-basic" label="Password" />
                        {/* <button class="btn">Login</button> */}




                   


                </div>
            </div>

        )
    
}
export default Login;