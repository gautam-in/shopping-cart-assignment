import React from 'react';
import '../login/index.scss';
import TextField from '@material-ui/core/TextField';


import { Link } from 'react-router-dom';
class Register extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={"loginContainer"}>
            <div className={"registerMargin"}>
                <span className="login">
                   SignUp
                </span>
                <span className="login2">
                We do not share your personal details with anyone
                </span>
            </div>
            <div class="text-fields">
            <form className={"form"}>
                        <TextField required id="standard-basic" label="First Name" />
                        <TextField required id="standard-basic" label="Last Name" />
                        <TextField required id="standard-basic" label="Email" />
                        <TextField required id="standard-basic" label="Password" />
                        <TextField required id="standard-basic" label="Confirm Password" />

                        <button class="btn" type="submit">Login</button>

                   </form>



                      


            </div>
            </div>
        )
    }
}
export default Register;